import { BaseModel } from "./BaseModel";
import type { PullRequest, ITeam } from "./types";

export class TeamModel extends BaseModel<ITeam> {
  constructor() {
    super("Team", {
      team: TeamModel.team,
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
      log: TeamModel.generateLog(),
      standouts: TeamModel.standouts,
    });
  }

  private static team = [
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
  ];

  private static randomMesh() {
    return new Array(11)
      .fill(0)
      .map(() =>
        new Array(11).fill(0).map(() => Math.floor(Math.random() * 20)),
      );
  }

  private static generateLog(): PullRequest[] {
    return new Array(10).fill(null).map(() => ({
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      author: this.team[Math.floor(Math.random() * 10)],
      status: ["open", "merged", "in review", "declined"][
        Math.floor(Math.random() * 4)
      ],
      description: "Model team, standardize colors",
      repository: "My Performance",
    }));
  }

  private static standouts = [
    {
      author: "Alex",
      delta: Math.floor(Math.random() * 40),
      lines: Math.floor(Math.random() * 5000),
    },
    {
      author: "George",
      delta: -20,
      lines: Math.floor(Math.random() * 1000),
    },
    {
      author: "Steve",
      delta: Math.floor(Math.random() * 40),
      lines: Math.floor(Math.random() * 1000),
    },
    {
      author: "Erica",
      delta: Math.floor(Math.random() * 40),
      lines: Math.floor(Math.random() * 2000),
    },
  ];
}
