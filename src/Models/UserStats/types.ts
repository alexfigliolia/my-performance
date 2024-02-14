import type { PullRequest } from "Models/Team";

export interface IUserStats {
  collaborators: string[];
  recentPullRequests: PullRequest[];
}
