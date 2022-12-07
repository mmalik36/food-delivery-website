import React from "react";
import "../styles/Home.css";
import logo from "../assets/sushi.png";

function Home() {
  return (
    <React.Fragment>

      <div className="home-body-text">
        <p className="wordBubble">
          We try to show you all the variety of Japanese cuisine and its current
          trends.
        </p>
      </div>


      <img src={logo} className="sushi-logo" alt="sushi"></img>
     


    </React.Fragment>
  );
}

export default Home;
