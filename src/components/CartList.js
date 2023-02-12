import React, { useState, useEffect } from "react";

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

  return (
    <div className="flex flex-col md:flex-row w-full justify-between md:h-screen">
      <div className="flex flex-col w-full md:w-1/2">
        <p className="font-semibold text-xl text-gray-900 py-2">
          Cart ({cart.length} items)
        </p>
        <div className="h-2/3">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="flex flex-row w-full my-4 border border-gray-200 rounded-lg">
                <img src={item.image} alt={item.name} className="w-52" />
                <div className="flex flex-col mx-4">
                  <p className="text-black mt-2">{item.name}</p>
                  <p className="text-gray-600 mt-2">Size: {item.size}</p>
                  <p className="text-gray-600 mt-2">{item.price}PLN</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-min py-2.5 px-5 mr-2 mt-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-8 w-full md:w-min shadow-md rounded-lg place-content-between h-2/3">
        <div>
          <p className="font-semibold text-xl text-gray-900">Summary</p>
          <p className="font-medium text-lg text-gray-900 mt-4 w-max">
            Total price: {total} PLN
          </p>
          <p className="font-normal text-sm text-gray-500 mt-4">
            Just one more step. Click Checkout button to finalize your order.
          </p>
        </div>
        <p className="font-medium text-white bg-black rounded-lg w-min mt-4 px-8 py-3 cursor-pointer">
          Checkout
        </p>
      </div>
    </div>
  );
}

export default CartList;
