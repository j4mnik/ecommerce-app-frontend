import React from "react";
import CartList from "../../components/CartList";

const Cart = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="mx-4">
        <CartList />
      </div>
    </div>
  );
};

export default Cart;
