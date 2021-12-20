import React from "react";

const SingleProject = ({project}) => {
    const {name, description, image, price} = project;
  return (
    <div className="col">
      <div className="card">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            {description}
          </p>
          <p>Price: ${price}M</p>
          <button className="btn btn-outline-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
