import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const SignUp = new Route({
  path: "/login/sign-up",
  Component: CreateLazyComponent({
    loader: () => import("Pages/SignUp"),
  }),
});
