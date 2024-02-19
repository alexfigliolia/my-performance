import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Projects as ProjectState } from "State/Projects";

export const Projects = new LazyRoute({
  path: "/projects",
  loader: () => {
    return Organizations.Registry.register(({ current }) => {
      return ProjectState.initializeProjects(current);
    });
  },
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
});
