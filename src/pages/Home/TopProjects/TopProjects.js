import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTopProjects } from "../../../store/topProjects";
import SingleProject from "../SingleProject/SingleProject";

const TopProjects = () => {
  const dispatch = useDispatch();
  const topProjects = useSelector((state) => state.entities.topProjects.list);

  useEffect(() => {
    dispatch(loadTopProjects());
  }, []);

  console.log(topProjects);

  return (
    <div>
      <div className="container">
        <div>
          <h2 className="pt-3 py-3">Top Projects</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {topProjects.map((project) => (
            <SingleProject key={project._id} project={project} />
          ))}
        </div>
        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-outline-primary" type="button">
            All Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProjects;
