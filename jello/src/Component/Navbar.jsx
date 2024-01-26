import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/HeroPage/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" /> 
      </div>
      <div className="cart">
        <FaCartShopping color="#EB6D27" />
        Cart
      </div>
    </nav>
  );
};

export default Navbar;