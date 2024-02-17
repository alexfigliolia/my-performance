import LoginPage from "Pages/Login";
import { Route } from "Routes/mixins";

export const Login = new Route({
  path: "/login",
  Component: LoginPage,
});
