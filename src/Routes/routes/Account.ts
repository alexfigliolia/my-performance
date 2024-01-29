import { CreateLazyComponent } from "Components/LazyComponent";
import { Route } from "Routes/mixins";

export const Account = new Route({
  path: "/account",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Account"),
  }),
});
