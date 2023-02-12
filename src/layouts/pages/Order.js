import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [orderDetails, setOrderDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zipCode: "",
    city: "",
    phoneNumber: "",
    paymentMethod: "",
    products: JSON.parse(sessionStorage.getItem("cart")),
  });

  const navigate = useNavigate();

  const [formValid, setFormValid] = useState(false);

  const SuccessMessage = () => (
    <p className="text-green-500 font-medium">Looks good!</p>
  );
  const ErrorMessage = () => (
    <p className="text-rose-600 font-medium">Fill all forms in a correct way</p>
  );

  const isFormValid = () => {
    return (
      orderDetails.firstName !== "" &&
      orderDetails.lastName !== "" &&
      orderDetails.email !== "" &&
      orderDetails.street !== "" &&
      orderDetails.zipCode !== "" &&
      orderDetails.city !== "" &&
      orderDetails.phoneNumber !== "" &&
      orderDetails.paymentMethod !== "" &&
      orderDetails.products != null
    );
  };

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCart(cart);
      setTotal(cart.reduce((acc, item) => acc + item.price, 0));
    }
  }, []);

  const handleChange = (e) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value,
    });
    setFormValid(isFormValid());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
      const data = await response.json();
      sessionStorage.removeItem("cart");
      navigate("/thanks");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="items-center justify-center mx-4 sm:mx-8 my-4 border border-gray-300 p-4 rounded-lg">
        <p className="font-medium text-lg text-gray-900 mt-4 w-max">
          Total price: {total} PLN
        </p>
        {cart.map((item) => (
          <div key={item.id} className="flex-row w-full">
            <p className="text-black mt-2">
              {item.name} ({item.size})
            </p>
          </div>
        ))}
        <form
          onSubmit={handleSubmit}
          className="my-8 p-4 border border-gray-200 rounded-lg"
        >
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col font-medium text-gray-500 mb-4">
              <label htmlFor="paymentMethod">Payment Method:</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={orderDetails.paymentMethod}
                onChange={handleChange}
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                required
              >
                <option value="">Select a Payment Method</option>
                <option value="onDeliveryPayment">Payment on delivery</option>
              </select>
            </div>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              First name:
              <input
                placeholder="John"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                name="firstName"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              Last name:
              <input
                placeholder="Doe"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                name="lastName"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              Email address:
              <input
                placeholder="john.doe@company.com"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              Street address:
              <input
                placeholder="Świętokrzyska 20"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                name="street"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              Zip code:
              <input
                placeholder="25-406"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                pattern="^[0-9]{2}-[0-9]{3}$"
                name="zipCode"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              City:
              <input
                placeholder="Kielce"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                name="city"
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="flex flex-col font-medium text-gray-500 mb-4">
              Phone number:
              <input
                placeholder="123-456-789"
                className="border border-slate-300 hover:border-indigo-300 rounded-lg px-4 py-2 mr-8 mt-1"
                type="text"
                name="phoneNumber"
                onChange={handleChange}
              />
            </label>
            <br />
          </div>
          {formValid ? <SuccessMessage /> : <ErrorMessage />}
          <div className="flex flex-col mt-4"></div>
          <button
            type="submit"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 disabled:bg-white disabled:text-gray-400"
            disabled={!formValid}
          >
            Buy now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
