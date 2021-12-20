import React, {useEffect, useState} from "react";
import SingleProject from "../SingleProject/SingleProject";

const UpCommingProjects = () => {

    const [upCommingProjects, setUpCommingProjects] = useState([]);

    useEffect(() => {
        fetch('https://mighty-woodland-85261.herokuapp.com/upcomming-projects')
        .then(res => res.json())
        .then(data => setUpCommingProjects(data));
    }, [])

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
