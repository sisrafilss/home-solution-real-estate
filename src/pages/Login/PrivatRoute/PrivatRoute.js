import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import useFirebase from "../../../hooks/useFirebase";

const PrivatRoute = ({ children }) => {
  const { user } = useFirebase();
  const location = useLocation();
  const loading = useSelector((state) => state.entities.user.loading);

  console.log(loading);

//   if (loading) {
//     return <div className="spinner-border text-primary"></div>;
//   }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivatRoute;
