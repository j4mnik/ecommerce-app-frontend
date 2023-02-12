import React from "react";
import CartList from "../../components/CartList";

const Cart = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="items-center justify-center mx-4 sm:mx-8">
      <p className="font-semibold text-2xl text-gray-900 my-4 w-max">
          Cart
        </p>
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
