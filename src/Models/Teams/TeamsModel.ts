import { QuickStack } from "Generics/QuickStack";
import type {
  CountLinesAndCommitsQuery,
  CountLinesAndCommitsQueryVariables,
  CreateTeamMutation,
  CreateTeamMutationVariables,
  MyTeamsQuery,
  MyTeamsQueryVariables,
} from "GQL";
import {
  countLinesAndCommits,
  createTeam,
  GQLServiceRequest,
  myTeams,
} from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeams, MyTeam } from "./types";

export class TeamsModel extends BaseModel<ITeams> {
  constructor() {
    super("Teams", {
      totalLines: 0,
      totalCommits: 0,
      totalProjects: 0,
      myTeams: new QuickStack(),
    });
  }

  public setTeamUsers(id: number, users: MyTeam["users"]) {
    const { myTeams } = this.getState();
    const team = myTeams.get(id);
    if (team) {
      team.users = users;
      myTeams.set(id, team);
      this.update(state => {
        state.myTeams = new QuickStack(state.myTeams);
      });
    }
  }

  public async countLinesAndCommits(
    organizationId = Organizations.getState().current,
  ) {
    const response = await GQLServiceRequest<
      CountLinesAndCommitsQuery,
      CountLinesAndCommitsQueryVariables
    >({
      query: countLinesAndCommits,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      const { lines, commits, totalProjects } =
        response.data.countLinesAndCommits;
      this.update(state => {
        state.totalLines = lines;
        state.totalCommits = commits;
        state.totalProjects = totalProjects;
      });
    }
  }

  public async getMyTeams(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      MyTeamsQuery,
      MyTeamsQueryVariables
    >({
      query: myTeams,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      const stack = new QuickStack<number, MyTeam>();
      response.data.myTeams.forEach(team => {
        stack.set(team.id, team);
      });
      this.update(state => {
        state.myTeams = stack;
      });
    }
  }

  public async createTeam(name: string) {
    const response = await GQLServiceRequest<
      CreateTeamMutation,
      CreateTeamMutationVariables
    >({
      query: createTeam,
      variables: {
        name,
        organizationId: Organizations.getState().current,
      },
    });
    if (response.data) {
      const { createTeam } = response.data;
      this.update(state => {
        state.myTeams.set(createTeam.id, createTeam);
        state.myTeams = new QuickStack(state.myTeams);
      });
    }
  }
}
