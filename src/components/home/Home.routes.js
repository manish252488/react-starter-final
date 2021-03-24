import Home from ".";
import authRoles from "../../config/authRoles";
const HomeRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/",
      component: Home,
      exact: true,
    },
  ],
};
export default HomeRoutes;
