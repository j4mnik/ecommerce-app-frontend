import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import Cart from "../assets/cart.png";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = sessionStorage.getItem("cart");
    if (savedCart) {
      setCartCount(JSON.parse(savedCart).length);
    }
  }, []);

  return (
    <div className="mb-24">
      <nav className="fixed flex px-2 sm:px-4 py-4 justify-between bg-white border-b border-gray-200 top-0 z-20 left-0 right-0">
        <div className="flex w-full mx-4 place-items-center justify-between">
          <Link to="/" className="flex place-items-center">
            <img
              src={Logo}
              alt="Logo image"
              className="h-6 sm:h-8 mr-2 justify-center justify-items-center"
            />
            <p className="font-bold text-lg text-gray-700 tracking-wide mx-2">
              jamando
            </p>
          </Link>
          <Link to="/cart" className="flex place-items-center">
            <img
              src={Cart}
              className="h-6 sm:h-8 mr-2 justify-center justify-items-center"
            />
            <p className="font-semibold text-md text-gray-700 rounded-lg">
              ({cartCount})
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
