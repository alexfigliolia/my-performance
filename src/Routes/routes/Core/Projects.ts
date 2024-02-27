import { CreateLazyComponent } from "Components/Tools";
import { LazyRoute } from "Routes/mixins";
import { Organizations } from "State/Organizations";
import { Projects as ProjectState } from "State/Projects";

export const Projects = new LazyRoute({
  path: "/projects",
  loader: () => {
    const { current: orgID } = Organizations.getState();
    if (orgID === -1) {
      return Organizations.Registry.register(({ current }) => {
        return ProjectState.initialize(current);
      });
    }
    void ProjectState.initialize(orgID);
    return "";
  },
  Component: CreateLazyComponent({
    loader: () => import("Pages/Projects"),
  }),
});
