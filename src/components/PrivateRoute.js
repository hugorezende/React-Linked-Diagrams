import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthDataContext } from "../components/AuthDataProvider";
export default function PrivateRoute({ component, ...rest }) {
  const { authData } = useAuthDataContext();
  //var authData = false;
  //console.log(component)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authData ? (
            component()
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
