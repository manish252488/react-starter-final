import React from "react";
import { Redirect } from "react-router";

const { default: authRoles } = require("../../config/authRoles");
const { default: NotFound } = require("./NotFound");

const NotFoundRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/404",
      exact: true,
      component: NotFound,
    },
    {
      component: () => <Redirect to="/404" />,
    },
  ],
};
export default NotFoundRoutes;
