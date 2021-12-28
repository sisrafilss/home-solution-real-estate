import React, { useState } from "react";
import { useSelector } from "react-redux";
import useFirebase from "../../../hooks/useFirebase";
import NestedRoutes from "../NestedRoutes/NestedRoutes";
import SidebarNavigation from "../SidebarNavigation/SidebarNavigation";

import "./Dashboard.css";

const Dashboard = () => {
  const pageTitle = useSelector(
    (state) => state.entities.adminDashboard.pageTitle
  );

  const { user, admin } = useFirebase();
  //   const admin = true;

  return (
    <div>
      <SidebarNavigation />
      <div style={{ marginLeft: "200px" }}>
        <div className="w-100 py-4 mt-0 dashboard-top">
          <h3 className="ms-5 d-inline"> {pageTitle} </h3>
          {user.email && (
            <div className="mx-3 d-inline user-profile">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light">
                {" "}
                {user?.displayName} | {admin ? "Admin" : "Subscriber"}
              </span>
            </div>
          )}
        </div>
        <div className="nested-routes">
          <NestedRoutes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
