import React from "react";
import "./Testimonial.css";

const Testimonial = ({ testimonial }) => {
  const { name, image, description } = testimonial;
  return (
    <div className="col-md-4 col-sm-12">
      <div className="card border-1 shadow-sm text-justify">
        <img src={image} className="review-img mt-3" alt="..." />
        <h5 className="mt-4 text-dark text-center"> {name} </h5>
        <div className="card-body text-center">
          <p className="card-text card-description"> {description} </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
