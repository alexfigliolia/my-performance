import { CreateLazyComponent } from "Components/LazyComponent";
import { IndexRoute } from "Routes/mixins";

export const Home = new IndexRoute({
  path: "/",
  Component: CreateLazyComponent({
    loader: () => import("Pages/Home").then(M => M.default),
  }),
});
