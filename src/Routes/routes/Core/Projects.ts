import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Teams } from "State/Teams";

export const Projects = new LazyRoute({
  path: "/projects",
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void Teams.countProjects(current);
    });
    return null;
  },
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
});
