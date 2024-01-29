import { Route } from "Routes/mixins";
import { CreateLazyComponent } from "Components/LazyComponent";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import { AuthCatch } from "./AuthCatch";

export const Auth = new Route({
  path: "/login",
  Component: CreateLazyComponent({
    loader: () => import("Layouts/Auth"),
  }),
  children: [Login, SignUp, AuthCatch],
});
