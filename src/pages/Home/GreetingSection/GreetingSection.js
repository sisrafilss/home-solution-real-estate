import React from "react";

import "./GreetingSection.css";
import apartment from "../../../images/apartment.jpg";

const GreetingSection = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="display-6 fw-bold">
          Welcome to <span className="text-success">Home Solution</span>
        </h2>
        <p className="lead">A complete package of Home Solution</p>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <div className="img-wrapper">
              <img src={apartment} className="img-fluid" alt="Apartment" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-5">
              <span className="d-block mb-2">Buy Home</span>
              <h3>
                Find, Buy & Own Your <br /> Dream Home
              </h3>
              <p className="lead">
                Explore from Apartments, land, builder floors, villas and more
              </p>
              <button className="btn btn-primary">Explore Buying</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingSection;
