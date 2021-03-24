import authRoles from "../../config/authRoles";
import Login from "./Login";
import SignUp from "./Signup";
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
      component: Login,
      exact: true,
    },
    {
      path: "/sign-up",
      component: SignUp,
      exact: true,
    },
  ],
};
export default AuthRoutes;
