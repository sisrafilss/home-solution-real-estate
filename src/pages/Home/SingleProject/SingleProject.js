import React from "react";
import { Link } from "react-router-dom";

const SingleProject = ({ project, type }) => {
  const { _id, name, description, image, price } = project;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Price: ${price}M</p>
          {type === "sale" ? (
            <Link className="btn btn-outline-primary" to={`/sale-flats/${_id}`}>
              View Details
            </Link>
          ) : (
            <Link
              className="btn btn-outline-primary"
              to={`/rented-flats/${_id}`}
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
