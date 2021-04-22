import { Redirect } from "react-router";
import Home from ".";
import authRoles from "../../config/authRoles";
const HomeRoutes = {
  auth: authRoles.user,
  routes: [
    {
      path: "/home",
      component: () => <Redirect to="/home/documents" />,
      exact: true,
    },
    {
      path: "/home/:screen",
      component: Home,
      exact: true,
    },
    {
      path: "/",
      component: () => <Redirect to="/home/all" />,
      exact: true,
    },
  ],
};
export default HomeRoutes;
