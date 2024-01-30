import type { PullRequest } from "Tools/Types";
import { BaseModel } from "./BaseModel";
import type { ITeam } from "./types";

export class TeamModel extends BaseModel<ITeam> {
  constructor() {
    super("Team", {
      team: TeamModel.team,
      totalLines: 32443534,
      totalCommits: 243534,
      trendLines: 10,
      trendCommits: 15,
      memberStats: {
        Alex: {
          commits: 3808,
          lines: 380896,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Steve: {
          lines: 177944,
          commits: 1944,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Erica: {
          lines: 391942,
          commits: 3942,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        George: {
          commits: 687,
          lines: 90687,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Someone: {
          lines: 298078,
          commits: 78,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Else: {
          commits: 59,
          lines: 169059,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Dave: {
          lines: 390679,
          commits: 379,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Carl: {
          commits: 256,
          lines: 460256,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Larry: {
          commits: 874,
          lines: 96874,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Sergey: {
          commits: 850,
          lines: 453850,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
        Ilia: {
          lines: 224889,
          commits: 889,
          recentPullRequests: TeamModel.randomInRange(10),
          linesPerMonth: new Array(12)
            .fill(0)
            .map(() => TeamModel.randomInRange(5000, 200)),
        },
      },
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
      lines: this.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => TeamModel.randomInRange(5000, 200)),
    },
    {
      author: "George",
      delta: -20,
      lines: this.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => TeamModel.randomInRange(5000, 200)),
    },
    {
      author: "Steve",
      delta: this.randomInRange(40),
      lines: this.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => TeamModel.randomInRange(5000, 200)),
    },
    {
      author: "Erica",
      delta: this.randomInRange(40),
      lines: this.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => TeamModel.randomInRange(5000, 200)),
    },
  ];

  private static randomInRange(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
