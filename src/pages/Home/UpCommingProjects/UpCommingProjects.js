import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadUpcommingProjects } from "../../../store/upcommingProjects";

import SingleProject from "../SingleProject/SingleProject";

const UpCommingProjects = () => {
  const dispatch = useDispatch();
  const upCommingProjects = useSelector((state) => state.entities.uocommingProjects.list);

  useEffect(() => {
    dispatch(loadUpcommingProjects());
  }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div>
          <h2 className="pt-3 py-3">Upcomming Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {upCommingProjects.map((project) => (
            <SingleProject key={project._id} project={project} />
          ))}
        </div>
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-outline-primary" type="button">
            All Upcomming Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpCommingProjects;
