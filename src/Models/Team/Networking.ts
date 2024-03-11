import type {
  AddNewUserToTeamMutation,
  AddNewUserToTeamMutationVariables,
  OverallStatsPerUserQuery,
  OverallStatsPerUserQueryVariables,
  StandoutsQuery,
  StandoutsQueryVariables,
  TrackedRepositoriesQuery,
  TrackedRepositoriesQueryVariables,
  TrackRepositoryMutation,
  TrackRepositoryMutationVariables,
} from "GQL";
import {
  addNewUserToTeam,
  GQLServiceRequest,
  overallStatsPerUser,
  standouts,
  trackedRepositories,
  trackRepository,
} from "GQL";
import { Organizations } from "State/Organizations";
import { Teams } from "State/Teams";
import { Toasts } from "State/Toasts";
import { BaseModel } from "Tools/BaseModel";
import type { ICreateUser, ITeam, Project } from "./types";

export class Networking extends BaseModel<ITeam> {
  public async teamStats(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      OverallStatsPerUserQuery,
      OverallStatsPerUserQueryVariables
    >({
      query: overallStatsPerUser,
      variables: {
        organizationId,
        teamId: this.getState().id,
      },
    });
    if (response.data) {
      const { name, users, totalLines, totalCommits } =
        response.data.overallStatsPerUser;
      this.update(state => {
        state.name = name;
        state.team = users;
        state.totalLines = totalLines;
        state.totalCommits = totalCommits;
      });
    }
  }

  public async getStandouts(organizationId = Organizations.getState().current) {
    const response = await GQLServiceRequest<
      StandoutsQuery,
      StandoutsQueryVariables
    >({
      query: standouts,
      variables: {
        organizationId,
        teamId: this.getState().id,
      },
    });
    if (response.data) {
      this.update(state => {
        state.standouts = response.data.standouts;
      });
    }
  }

  public async trackedProjects(
    organizationId = Organizations.getState().current,
  ) {
    const response = await GQLServiceRequest<
      TrackedRepositoriesQuery,
      TrackedRepositoriesQueryVariables
    >({
      query: trackedRepositories,
      variables: {
        organizationId,
        teamId: this.getState().id,
      },
    });
    if (!response.data) {
      return Toasts.dispatch({
        type: "error",
        title: "Network Error",
        message:
          "There was an error fetching your teams projects. Please check your internet connection and try again",
      });
    }
    const map = new Map<number, Project>();
    response.data.trackedRepositories.forEach(project => {
      map.set(project.id, project);
    });
    this.update(state => {
      state.trackedProjects = map;
    });
  }

  public async trackRepository(repositoryId: number) {
    try {
      const response = await GQLServiceRequest<
        TrackRepositoryMutation,
        TrackRepositoryMutationVariables
      >({
        query: trackRepository,
        variables: {
          repositoryId,
          teamId: this.getState().id,
          organizationId: Organizations.getState().current,
        },
      });
      const project = response.data.trackRepository;
      const nextState = new Map(this.getState().trackedProjects);
      nextState.set(project.id, project);
      this.update(state => {
        state.trackedProjects = nextState;
      });
      return true;
    } catch (error) {
      return Toasts.dispatch({
        type: "error",
        title: "Network Error",
        message: "Please check your connection and try again",
      });
    }
  }

  public async addNewUser(user: ICreateUser) {
    const response = await GQLServiceRequest<
      AddNewUserToTeamMutation,
      AddNewUserToTeamMutationVariables
    >({
      query: addNewUserToTeam,
      variables: {
        ...user,
        teamId: this.getState().id,
        organizationId: Organizations.getState().current,
      },
    });
    if (response.data) {
      const { id, name, users, totalLines, totalCommits } =
        response.data.addNewUserToTeam;
      this.update(state => {
        state.name = name;
        state.team = users;
        state.totalLines = totalLines;
        state.totalCommits = totalCommits;
      });
      Teams.setTeamUsers(
        id,
        users.map(u => ({
          id: u.id,
          name: u.name,
        })),
      );
    }
  }
}
