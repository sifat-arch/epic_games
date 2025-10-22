import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p className="text-4xl text-red-500">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
