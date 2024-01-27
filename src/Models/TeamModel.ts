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
      mesh: [
        [69, 77, 93, 78, 36, 28, 13, 24, 92, 55, 7],
        [75, 56, 26, 4, 73, 28, 19, 98, 89, 85, 70],
        [34, 74, 42, 8, 25, 61, 86, 45, 67, 9, 61],
        [17, 97, 61, 33, 16, 4, 57, 68, 90, 78, 79],
        [41, 65, 72, 78, 0, 48, 42, 38, 93, 18, 18],
        [70, 75, 14, 7, 87, 37, 78, 30, 9, 4, 81],
        [88, 34, 92, 67, 70, 26, 4, 84, 44, 75, 35],
        [60, 97, 13, 97, 70, 43, 70, 55, 5, 6, 40],
        [77, 13, 90, 28, 52, 45, 20, 80, 66, 81, 46],
        [78, 19, 96, 28, 78, 40, 11, 76, 14, 99, 86],
        [10, 81, 57, 59, 42, 66, 23, 51, 72, 99, 95],
      ],
      features: ["login", "data-viz", "graphQL", "tooling"],
    });
  }

  public randomMesh() {
    this.update(state => {
      state.mesh = state.mesh.map(() =>
        new Array(11).fill(0).map(() => Math.floor(Math.random() * 100)),
      );
    });
  }
}
