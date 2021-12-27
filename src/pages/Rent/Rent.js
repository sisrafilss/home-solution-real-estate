import React from "react";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Rent = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <h2 className="text-center">This is Rent! Protected Route</h2>
      </div>
      <Footer />
    </>
  );
};

export default Rent;
