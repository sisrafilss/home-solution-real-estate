import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFlats } from "../../store/flatSale";
import SingleProject from "../Home/SingleProject/SingleProject";
import Footer from "../Shared/Footer/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";



const SaleFlats = () => {
  const dispatch = useDispatch();
  const saleFlats = useSelector((state) => state.entities.saleFlats.saleFlats);

  useEffect(() => {
    dispatch(loadFlats());
  }, []);

  return (
    <>
      <Navigation />
      <div className="container my-5">
        <div>
          <h2 className="pt-3 py-3">Flats for Sale</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {saleFlats.map((project) => (
            <SingleProject key={project._id} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaleFlats;
