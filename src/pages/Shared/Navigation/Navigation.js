import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo} alt="" width="30" height="24" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Buy
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Rent
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Home Loan
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
