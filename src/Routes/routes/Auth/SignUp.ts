import { Authenticator } from "Authentication";
import SignUpPage from "Pages/SignUp";
import { Route } from "Routes/mixins";

export const SignUp = new Route({
  path: "/login/sign-up",
  Component: SignUpPage,
  loader: () => {
    return new Promise(resolve => {
      resolve(Authenticator.validateSignUp());
    });
  },
});
