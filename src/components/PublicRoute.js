import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "../utils/isLogin";

function PublicRoute({ render: Component, restricted, ...rest }) {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route

    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          // false && restricted ? (
          <Redirect to="/profile" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
