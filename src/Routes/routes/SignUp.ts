import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "../mixins";

export const SignUp = new Route({
  path: "/sign-up",
  Component: CreateLazyComponent({
    loader: () => import("Pages/SignUp"),
  }),
});
