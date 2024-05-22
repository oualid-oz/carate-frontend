import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedRoute(children, ...rest) {
  const isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
    />
  );
}

export default ProtectedRoute;
