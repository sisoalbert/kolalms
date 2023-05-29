import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "../state/store";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
