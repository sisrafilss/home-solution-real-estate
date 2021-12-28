import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNavigation.css";
import logo from "../../../images/logo.png";
import useFirebase from "../../../hooks/useFirebase";

const SidebarNavigation = () => {
  //   let { url } = useRouteMatch();
  const { admin } = useFirebase();
  // let url = "something";

  return (
    <div>
      <div className="logo-section">
        <Link to="/home">
          <img
            src={logo}
            style={{ width: "35px", height: "35px" }}
            className="d-block mx-auto"
            alt=""
          />
          <span
            className="ms-2 h3
                    d-inline-block"
            style={{ color: "#f1f1f1" }}
          >
            HomeSolution
          </span>
        </Link>
      </div>
      <div className="sidenav">
    
        {!admin && (
          <div>
            <Link to="my-orders">My Orders</Link>
            <Link to="payment">Payment</Link>
            <Link to="review">Review</Link>
          </div>
        )}
        {admin && (
          <div>
            <Link to="manage-all-orders">All Orders</Link>
            <Link to="add-product">Add Product</Link>
            <Link to="make-admin">Make Admin</Link>
            <Link to="manage-products">Manage Products</Link>
          </div>
        )}
        <Link to="logout">Log Out</Link>
      </div>
    </div>
  );
};

export default SidebarNavigation;
