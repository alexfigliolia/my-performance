import { BaseModel } from "./BaseModel";
import type { PullRequest, ITeam } from "./types";

export class TeamModel extends BaseModel<ITeam> {
  constructor() {
    super("Team", {
      team: TeamModel.team,
      totalLines: 32443534,
      totalCommits: 243534,
      trendLines: 10,
      trendCommits: 15,
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
      commits: {
        Alex: 3808,
        Steve: 1944,
        Erica: 3942,
        George: 687,
        Someone: 78,
        Else: 59,
        Dave: 379,
        Carl: 256,
        Larry: 874,
        Sergey: 850,
        Ilia: 889,
      },
      linesPerMonth: TeamModel.linesPerMonth,
      mesh: TeamModel.randomMesh(),
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
      .map(() => new Array(11).fill(0).map(() => this.randomInRange(20)));
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
        this.randomInRange(4)
      ],
      description: "Model team, standardize colors",
      repository: "My Performance",
    }));
  }

  private static standouts = [
    {
      author: "Alex",
      delta: this.randomInRange(40),
      lines: this.randomInRange(5000),
    },
    {
      author: "George",
      delta: -20,
      lines: this.randomInRange(1000),
    },
    {
      author: "Steve",
      delta: this.randomInRange(40),
      lines: this.randomInRange(1000),
    },
    {
      author: "Erica",
      delta: this.randomInRange(40),
      lines: this.randomInRange(2000),
    },
  ];

  private static linesPerMonth = {
    Alex: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Steve: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Erica: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    George: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Someone: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Else: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Dave: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Carl: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Larry: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Sergey: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
    Ilia: new Array(12).fill(0).map(() => this.randomInRange(5000, 200)),
  };

  private static randomInRange(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
