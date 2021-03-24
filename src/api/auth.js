import { client } from "./client";

const Auth = {
  login: (data) => client.post("/auth/login", data),
  signup: (data) => client.post("/auth/signup", data),
  checkAuth: () => client.get("/auth/check"),
  signOut: () => client.get("/auth/signout"),
};

export default Auth;
