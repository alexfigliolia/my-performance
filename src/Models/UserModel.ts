import { Numbers } from "Tools/Numbers";
import { BaseModel } from "./BaseModel";
import type { IUser } from "./types";

export class UserModel extends BaseModel<IUser> {
  constructor() {
    super("User", {
      name: "Alex Figliolia",
      token: "",
      role: "engineer",
      memberName: "Alex",
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
