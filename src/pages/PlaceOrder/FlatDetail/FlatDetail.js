import React from "react";
import { useSelector } from "react-redux";

const FlatDetail = () => {
    let key = 0;
  const flatDetail = useSelector(
    (state) => state.entities?.saleFlats?.flatDetail
  );

  const { name, image, price, detail } = flatDetail;
  return (
    <div>
      <div className="container mt-4 mb-5">
        <h2 className="mb-4 text-primary text-center display-5 fw-bold text-decoration-underline">
          Apartment Detail
        </h2>
        <div className="card mb-3">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                src={image}
                className="img-fluid rounded-start w-100"
                alt="..."
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card-body ps-4">
                <h4 className="h1 text-success"> {name} </h4>
                {detail &&
                  detail.map((dtl) => (
                    <p className="card-text" key={++key}>
                      {dtl}
                    </p>
                  ))}

                <p className="card-text h2">Price: ${price} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetail;
