import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadTopRentedFlats } from '../../../store/rentedFlats';
import SingleProject from '../SingleProject/SingleProject';

const TopRentedFlats = () => {
    const dispatch = useDispatch();
  const topRentedFlats = useSelector((state) => state.entities.rentedFlats.topRentedFlats);

  useEffect(() => {
    dispatch(loadTopRentedFlats());
  }, []);

    return (
        <>
      <div className="container my-5">
        <div>
          <h2 className="pt-3 py-3">Top Rented Flats</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {topRentedFlats.map((project) => (
            <SingleProject key={project._id} type="rent" project={project} />
          ))}
        </div>
        <div className="d-grid gap-2 mt-4">
          <Link to="/rented-flats" className="btn btn-outline-primary" >
            See All Flats
          </Link>
        </div>
      </div>
    </>
    );
};

export default TopRentedFlats;