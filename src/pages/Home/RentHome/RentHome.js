import React from "react";

import apartment from "../../../images/rent-home.jpg";
import SectionHead from "../../Shared/SectionHead/SectionHead";

const RentHome = () => {
  const sectionHead = {
    title: "Are you Looking for a Home to Rent?",
    subTitle: "Home Renting is easy and Simple",
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <SectionHead sectionHead={sectionHead} />
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
              <span className="d-block mb-2">Rent Home</span>
              <h3>
                Find & Rent your <br /> Dream Home
              </h3>
              <p className="lead">
                Finding and Renting Home are super simple and secure with Home
                Solution
              </p>
              <button className="btn btn-primary">Explore Buying</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentHome;
