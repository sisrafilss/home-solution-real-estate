import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadTopFlats } from "../../../store/flatSale";
import SingleProject from "../SingleProject/SingleProject";

const TopSaleFlats = () => {
  const dispatch = useDispatch();
  const saleFlats = useSelector((state) => state.entities.saleFlats.topSaleFlats);

  useEffect(() => {
    dispatch(loadTopFlats());
  }, []);

  return (
    <>
      <div className="container my-5">
        <div>
          <h2 className="pt-3 py-3">Flats for Sale</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {saleFlats.map((project) => (
            <SingleProject key={project._id} type="sale" project={project} />
          ))}
        </div>
        <div className="d-grid gap-2 mt-4">
          <Link to="/buy-flats" className="btn btn-outline-primary" >
            See All Flats
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopSaleFlats;
