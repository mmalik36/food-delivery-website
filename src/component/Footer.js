import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Footer() {
  return (
    <div className="bg-dark">
      <div className="container bg-dark">
        <div className="row py-5 text-white">
          <div className="col-md-3 col-sm-12">
            <h4>Bumble Bee</h4>
            <p>
              We try to show you all the variety of Japanese cuisine and its
              current trends.
            </p>
          </div>

          <div className="col-md-3 col-sm-12">
            <h4>Services</h4>
            <p>Take out</p>
            <p>Dine In</p>
          </div>

          <div className="col-md-3 col-sm-12">
            <h4>Follow Us Here</h4>
            <p>https://www.facebook.com</p>
          </div>

          <div className="col-md-3 col-sm-12">
            <h4>Address</h4>
            <p/>
            2520 Chicago Avenue, Dinuba, CA 93618
            <br />
          </div>

          <div className="col-md-3 col-sm-12">
            <h4>Phone Number</h4>
            <p />
            +15303023501
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
