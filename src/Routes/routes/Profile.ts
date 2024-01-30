import { CreateLazyComponent } from "Components/LazyComponent";
import { LazyRoute } from "Routes/mixins";

export const Profile = new LazyRoute({
  path: "/profile",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Profile"),
  }),
});
