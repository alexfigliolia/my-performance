import { Authenticator } from "Authentication";
import LoginPage from "Pages/Login";
import { Route } from "Routes/mixins";

export const Login = new Route({
  path: "/login",
  Component: LoginPage,
  loader: () => {
    Authenticator.validLogin();
    return null;
  },
});
