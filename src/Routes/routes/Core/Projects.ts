import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Projects as ProjectState } from "State/Projects";

export const Projects = new LazyRoute({
  path: "/projects",
  loader: () => {
    void Organizations.registerIfUninitialized(({ current }) => {
      void ProjectState.initialize(current);
    });
    return null;
  },
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
});
