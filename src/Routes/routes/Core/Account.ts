import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";

export const Account = new LazyRoute({
  path: "/account",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Account"),
  }),
});
