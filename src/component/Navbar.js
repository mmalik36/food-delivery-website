import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (

    <header>
        <h3 className="logo">Bumble Bee</h3>
        <div>
      <nav ref={navRef}>

        <a href="/#">Home</a>
        <a href="/contact">Contact</a>
          <a href="/menu">Menu</a>
        <a href="/cart">Cart</a>
          <a href="/#">Login</a>

        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavBar} className="nav-btn">
        <FaBars />
      </button>
        </div>
            <button onClick={event=>window.location.href='./menu'} className="order-btn" >
                Order Now
            </button>
    </header>
  );

}


export default Navbar;

