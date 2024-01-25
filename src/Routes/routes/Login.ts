import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "../mixins";

export const Login = new Route({
  path: "/login",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Login"),
  }),
});
