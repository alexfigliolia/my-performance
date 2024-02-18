import { Authenticator } from "Authentication";
import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { AuthCatch } from "./AuthCatch";
import { Login } from "./Login";
import { Setup } from "./Setup";
import { SignUp } from "./SignUp";

export const Auth = new LazyRoute({
  path: "/login",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Auth"),
  }),
  loader: () => {
    return Authenticator.verifyAnonymous();
  },
  children: [Login, SignUp, Setup, AuthCatch],
});
