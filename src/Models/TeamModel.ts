import { BaseModel } from "./BaseModel";
import type { ITeam } from "./types";

export class TeamModel extends BaseModel<ITeam> {
  constructor() {
    super("Team", {
      team: [
        "Alex",
        "Steve",
        "Erica",
        "George",
        "Someone",
        "Else",
        "Dave",
        "Carl",
        "Larry",
        "Sergey",
        "Ilia",
      ],
      lines: {
        Alex: 380896,
        Steve: 177944,
        Erica: 391942,
        George: 90687,
        Someone: 298078,
        Else: 169059,
        Dave: 390679,
        Carl: 460256,
        Larry: 96874,
        Sergey: 453850,
        Ilia: 224889,
      },
      mesh: TeamModel.randomMesh(),
      features: ["login", "data-viz", "graphQL", "tooling"],
    });
  }

  private static randomMesh() {
    return new Array(11)
      .fill(0)
      .map(() =>
        new Array(11).fill(0).map(() => Math.floor(Math.random() * 20)),
      );
  }
}
