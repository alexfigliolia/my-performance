import { QuickStack } from "Generics/QuickStack";
import type {
  CreateTeamMutation,
  CreateTeamMutationVariables,
  MyTeamsQuery,
  MyTeamsQueryVariables,
  TotalRepositoriesQuery,
  TotalRepositoriesQueryVariables,
  TotalTeamsQuery,
  TotalTeamsQueryVariables,
} from "GQL";
import {
  createTeam,
  GQLServiceRequest,
  myTeams,
  totalRepositories,
  totalTeams,
} from "GQL";
import { Organizations } from "State/Organizations";
import { BaseModel } from "Tools/BaseModel";
import type { ITeams, MyTeam } from "./types";

export class TeamsModel extends BaseModel<ITeams> {
  constructor() {
    super("Teams", {
      totalTeams: 0,
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

  public async countTeams(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      TotalTeamsQuery,
      TotalTeamsQueryVariables
    >({
      query: totalTeams,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.totalTeams = response.data.totalTeams;
      });
    }
  }

  public async countProjects(
    organizationId = Organizations.getState().current,
  ) {
    const response = await GQLServiceRequest<
      TotalRepositoriesQuery,
      TotalRepositoriesQueryVariables
    >({
      query: totalRepositories,
      variables: {
        organizationId,
      },
    });
    if (response.data) {
      this.update(state => {
        state.totalProjects = response.data.totalRepositories;
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
        state.totalTeams = state.totalTeams + 1;
        state.myTeams.set(createTeam.id, createTeam);
        state.myTeams = new QuickStack(state.myTeams);
      });
    }
  }
}
