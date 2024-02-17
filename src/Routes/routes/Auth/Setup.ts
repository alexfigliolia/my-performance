import { Authenticator } from "Authentication/Authenticator";
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
