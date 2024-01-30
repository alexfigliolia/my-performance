import { BaseModel } from "./BaseModel";
import type { IProject } from "./types";

export class ProjectModel extends BaseModel<IProject> {
  constructor() {
    super("Project", {
      name: "My Perf",
      lines: 100_000_000,
      commits: 1_000_000,
    });
  }
}
