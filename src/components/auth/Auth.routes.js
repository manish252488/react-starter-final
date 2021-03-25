import AuthComponent from ".";
import authRoles from "../../config/authRoles";
/**
 *      {
 *        path: '/',
 *        exact: true,
 *        component: () => <div>component</div>
 *      }
 */
const AuthRoutes = {
  auth: authRoles.guest,
  routes: [
    {
      path: "/login",
      component: AuthComponent,
      exact: true,
    },
    {
      path: "/sign-up",
      component: AuthComponent,
      exact: true,
    },
  ],
};
export default AuthRoutes;
