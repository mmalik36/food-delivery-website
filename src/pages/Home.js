import React from "react";
import "../styles/Home.css";
import Navbar from "../component/Navbar";
import logo from "../assets/sushi.png";

function Home() {
  return (
    <div>
     
    <div className="home-text">
        <p className="wordBubble">
          We try to show you all the variety of Japanese cuisine and its current
          trends.
        </p>
        </div>


      <img src={logo} className="sushi-logo" alt="sushi"></img>
     
        <div className="order-div">
            <button onClick={event=>window.location.href='./menu'} className="order-btn" >
                Order Now
            </button>
        </div>

    </div>
  );
}

export default Home;
