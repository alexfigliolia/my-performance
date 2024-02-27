import { Networking } from "./Networking";
import type { TrackedProject } from "./types";

export class ProjectsModel extends Networking {
  constructor() {
    super("Project", {
      lines: 10_000_000,
      commits: 1_000_000,
      trackedProjects: new Map(),
    });
  }

  public async initialize(organizationId: number) {
    try {
      const response = await super.trackedProjects(organizationId);
      const projects = new Map<number, TrackedProject>();
      response.data.trackedRepositories.forEach(project => {
        projects.set(project.id, project);
      });

      this.update(state => {
        state.trackedProjects = projects;
      });
    } catch (error) {
      // TODO - toast the error
    }
  }

  public async trackRepository(id: number) {
    try {
      const response = await super.trackProject(id);
      const project = response.data.trackRepository;
      const nextState = new Map(this.getState().trackedProjects);
      nextState.set(project.id, project);
      this.update(state => {
        state.trackedProjects = nextState;
      });
      return true;
    } catch (error) {
      // TODO - error handle
      return false;
    }
  }
}
