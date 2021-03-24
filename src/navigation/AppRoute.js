import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import authRoles from "../config/authRoles";
import routesConfig from "./RoutesConfig";
import { generateRoutesFromConfigs } from "./RoutesUtils";

export default function AppRoute(props) {
  const isAuthenticated = useSelector(({ Auth }) =>Auth?.isAuthenticated 
  );
  const auth = useSelector(({ Auth }) =>
    isAuthenticated ? Auth.role : authRoles.guest[0]
  );
  const config = [...generateRoutesFromConfigs(routesConfig, auth)];
  return (
    <Switch>
      {config.map((value, index) => (
        <Route
          key={index}
          exact={value.exact || false}
          path={value.path}
          component={value.component}
        />
      ))}
    </Switch>
  );
}
