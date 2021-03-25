import { Redirect } from "react-router";
import Home from ".";
import authRoles from "../../config/authRoles";
const HomeRoutes = {
  auth: authRoles.user,
  routes: [
    {
      path: "/home",
      component: Home,
      exact: true,
    },
    {
      path: "/",
      component: () => <Redirect to="/home" />,
      exact: true,
    },
  ],
};
export default HomeRoutes;
