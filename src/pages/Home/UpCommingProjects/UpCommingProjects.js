import React from "react";

import topProject1 from "../../../images/top-project-1.jpg";
import SingleProject from "../SingleProject/SingleProject";

const upCommingProjects = [
  {
    id: 1,
    name: "Mega City",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique",
    image: topProject1,
    price: 1.2,
  },
  {
    id: 2,
    name: "Mega City",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique",
    image: topProject1,
    price: 1.2,
  },
  {
    id: 3,
    name: "Mega City",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique",
    image: topProject1,
    price: 1.2,
  },
  {
    id: 4,
    name: "Mega City",
    description:
      "Sed ipsum posuere nunc libero pellentesque vitae ultrices posuere. Praesent justo dui laoreet dignissim lectus etiam ipsum habitant tristique",
    image: topProject1,
    price: 1.2,
  },
];

const UpCommingProjects = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div>
          <h2 className="pt-3 py-3">Upcomming Projects</h2>
        </div>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {upCommingProjects.map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
        <div class="d-grid gap-2 mt-4">
          <button class="btn btn-outline-primary" type="button">
            All Upcomming Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpCommingProjects;
