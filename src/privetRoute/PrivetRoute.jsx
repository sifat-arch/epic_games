import React, { useContext } from "react";
import Loading from "../components/Loading";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
