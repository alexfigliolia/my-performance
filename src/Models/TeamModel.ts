import { Formatting } from "Tools/Formatting";
import { Numbers } from "Tools/Numbers";
import type { PullRequest } from "Tools/Types";
import { BaseModel } from "./BaseModel";
import type { ITeam } from "./types";

export class TeamModel extends BaseModel<ITeam> {
  constructor() {
    super("Team", {
      search: "",
      team: [],
      truncatedNames: [],
      totalLines: 10000000,
      totalCommits: 1000,
      trendLines: 0,
      trendCommits: 0,
      memberStats: {},
      mesh: [],
      log: [],
      standouts: TeamModel.standouts,
    });
  }

  public search(value: string) {
    this.update(state => {
      state.search = value;
    });
  }

  private static team = [
    "Alex Figliolia",
    "Steve",
    "Erica",
    "George",
    "Dana",
    "Someone",
    "Dave",
    "Carl",
    "Larry",
    "Sergey",
    "Ilia",
  ];

  private static truncatedNames = this.team.map(name =>
    Formatting.nameWithFirstInitial(name),
  );

  private static randomMesh() {
    return new Array(11)
      .fill(0)
      .map(() => new Array(11).fill(0).map(() => Numbers.randomInRange(20)));
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
        Numbers.randomInRange(4)
      ],
      description: "Model team, standardize colors",
      repository: "My Performance",
    }));
  }

  private static standouts = [
    {
      author: "Alex Figliolia",
      delta: Numbers.randomInRange(40),
      lines: Numbers.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    {
      author: "George",
      delta: -20,
      lines: Numbers.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    {
      author: "Steve",
      delta: Numbers.randomInRange(40),
      lines: Numbers.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    {
      author: "Erica",
      delta: Numbers.randomInRange(40),
      lines: Numbers.randomInRange(2000),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
  ];

  private static memberStats = {
    "Alex Figliolia": {
      lines: 1779044,
      commits: 1944,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Steve: {
      lines: 177944,
      commits: 1944,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Erica: {
      lines: 391942,
      commits: 3942,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    George: {
      commits: 687,
      lines: 90687,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Dana: {
      lines: 298078,
      commits: 78,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Someone: {
      commits: 59,
      lines: 169059,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Dave: {
      lines: 390679,
      commits: 379,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Carl: {
      commits: 256,
      lines: 460256,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Larry: {
      commits: 874,
      lines: 96874,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Sergey: {
      commits: 850,
      lines: 453850,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
    Ilia: {
      lines: 224889,
      commits: 889,
      recentPullRequests: Numbers.randomInRange(10),
      linesPerMonth: new Array(12)
        .fill(0)
        .map(() => Numbers.randomInRange(5000, 200)),
    },
  };
}
