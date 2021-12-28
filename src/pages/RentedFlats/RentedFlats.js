import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRentedFlats } from "../../store/rentedFlats";
import SingleProject from "../Home/SingleProject/SingleProject";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const RentedFlats = () => {
  const dispatch = useDispatch();
  const rentedFlats = useSelector(
    (state) => state.entities.rentedFlats.rentedFlats
  );

  useEffect(() => {
    dispatch(loadRentedFlats());
  }, []);

  return (
    <>
      <Navigation />
      <div className="container my-5">
        <div>
          <h2 className="pt-3 py-3">Flats for Rent</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {rentedFlats.map((project) => (
            <SingleProject key={project._id} type="rent" project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RentedFlats;
