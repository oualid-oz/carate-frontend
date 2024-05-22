import React from "react";
import { Navigate } from "react-router-dom";

function Logout() {
  const setLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAuthenticated");
  };
  React.useEffect(() => {
    setLogout();
  }, []);
  return <Navigate to="/login" />;
}

export default Logout;
