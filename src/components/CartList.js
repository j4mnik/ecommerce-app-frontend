import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function CartList() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      setCart(cart);
      setTotal(cart.reduce((acc, item) => acc + item.price, 0));
    }
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    setTotal(updatedCart.reduce((acc, item) => acc + item.price, 0));
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/order");
    }
  };

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-col w-full">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="flex flex-row w-full my-4 border border-gray-200 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-1/2 md:w-52"
                />
                <div className="flex flex-col mx-4">
                  <p className="text-black mt-2">{item.name}</p>
                  <p className="text-gray-600 mt-2">Size: {item.size}</p>
                  <p className="text-gray-600 mt-2">{item.price}PLN</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-min md:py-2.5 md:px-5 md:mr-2 md:mt-4 md:mb-2 px-2 py-2 my-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="items-center justify-center mx-4 sm:mx-8 my-8">
            <div>
              <p className="font-semibold text-xl text-gray-900">Summary</p>
              <p className="font-medium text-lg text-gray-900 mt-4 w-max">
                Total price: {total} PLN
              </p>
              <p className="font-normal text-sm text-gray-500 mt-4">
                Just one more step. Click Checkout button to finalize your
                order.
              </p>
            </div>
            <button
              onClick={handleCheckout}
              className="font-medium text-white bg-black rounded-lg w-min mt-4 px-8 py-3 cursor-pointer"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full">
          <p className="font-medium text-lg text-gray-600">
            There are no items in cart.
          </p>
          <Link to="../products">
            <p className="border border-gray-300 px-4 py-2 mr-4 mt-2 text-sm rounded-lg hover:border-gray-400 w-fit">
              Discover products
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartList;
