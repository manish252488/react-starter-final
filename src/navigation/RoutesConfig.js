import AdminRoutes from "../components/admin/Admin.routes";
import AuthRoutes from "../components/auth/Auth.routes";
import HomeRoutes from "../components/home/Home.routes";
import NotFoundRoutes from "../components/not-found/NotFound.routes";

const routesConfig = [HomeRoutes, AuthRoutes, AdminRoutes,NotFoundRoutes];

export default routesConfig;
