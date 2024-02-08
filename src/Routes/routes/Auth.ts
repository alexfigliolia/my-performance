import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";
import { Authenticator } from "Tools/Authenticator";
import { AuthCatch } from "./AuthCatch";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const Auth = new LazyRoute({
  path: "/login",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Auth"),
  }),
  loader: () => {
    return Authenticator.validateAnonymousUser();
  },
  children: [Login, SignUp, AuthCatch],
});
