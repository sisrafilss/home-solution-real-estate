import React from "react";
import "./HelpfulLinks.css";

const HelpfulLinks = () => {
  return (
    <div className="mt-4">
      <h4 className="pb-3 footer-heading">Helpful Links</h4>
      <div className="helpful-links">
        <li className="mb-1">
          <a href="#">About us</a>
        </li>
        <li className="mb-1">
          <a href="#">Contact us</a>
        </li>
        <li className="mb-1">
          <a href="#">Career with us</a>
        </li>
        <li className="mb-1">
          <a href="#">Terms & Conditions</a>
        </li>
        <li className="mb-1">
          <a href="#">Feedback</a>
        </li>
        <li className="mb-1">
          <a href="#">Privicy Policy</a>
        </li>{" "}
      </div>
    </div>
  );
};

export default HelpfulLinks;
