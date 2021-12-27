import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../../hooks/useFirebase";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const { user, logOut } = useFirebase();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" width="50" height="40" />
          <span className="text-white ms-1" style={{ fontSize: "1.2rem" }}>
            HomeSolution
          </span>
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/buy-flats">
                Buy
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/rent">
                Rent
              </Link>
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
            {user?.email && (
              <li className="nav-item  fitpal-nav-item me-4">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}

            {user?.email ? (
              <button
                onClick={logOut}
                style={{ outline: 0, border: 0, borderRadius: "3px" }}
              >
                LogOut
              </button>
            ) : (
              <li className="nav-item fitpal-nav-item me-4">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>

          {user.email && (
            <div className="mx-3">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light"> {user?.displayName} </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
