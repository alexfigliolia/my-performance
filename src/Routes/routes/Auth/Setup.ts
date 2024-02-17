import { Authenticator } from "Authentication";
import SetupPage from "Pages/Setup";
import { Route } from "Routes/mixins";

export const Setup = new Route({
  path: "/login/setup",
  Component: SetupPage,
  loader: () => {
    return new Promise(resolve => {
      resolve(Authenticator.validateSetup());
    });
  },
});
