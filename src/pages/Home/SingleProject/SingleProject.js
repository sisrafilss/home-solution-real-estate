import React from "react";

const SingleProject = ({project}) => {
    const {name, description, image, price} = project;
  return (
    <div class="col">
      <div class="card">
        <img src={image} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
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
