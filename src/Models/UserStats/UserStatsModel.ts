import { BaseModel } from "Tools/BaseModel";
import { Numbers } from "Tools/Numbers";
import type { IUserStats } from "./types";

export class UserStatsModel extends BaseModel<IUserStats> {
  constructor() {
    super("User Stats", {
      collaborators: ["Steve", "Erica", "George", "Dana", "Larry", "Dave"],
      recentPullRequests: new Array(8).fill(null).map(() => ({
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        author: "You",
        status: ["open", "merged", "in review", "declined"][
          Numbers.randomInRange(4)
        ],
        description: "Model team, standardize colors",
        repository: "My Performance",
      })),
    });
  }
}
