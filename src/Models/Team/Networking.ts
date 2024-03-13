import type {
  AddNewUserToTeamMutation,
  AddNewUserToTeamMutationVariables,
  OverallStatsPerUserQuery,
  OverallStatsPerUserQueryVariables,
  StandoutsQuery,
  StandoutsQueryVariables,
  TeamStats,
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
      this.setTeamState(response.data.overallStatsPerUser);
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
      const { trackedProjects } = this.getState();
      trackedProjects.set(project.id, project);
      this.update(state => {
        state.trackedProjects = new Map(trackedProjects);
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
      this.setTeamState(response.data.addNewUserToTeam);
    }
  }

  public setTeamState(state: TeamStats) {
    const {
      name,
      users,
      projects,
      totalLines,
      lineTrend,
      commitTrend,
      totalCommits,
    } = state;
    const { trackedProjects, trend: projectTrend } = projects;
    this.update(state => {
      state.name = name;
      state.team = users;
      state.lineTrend = lineTrend;
      state.totalLines = totalLines;
      state.commitTrend = commitTrend;
      state.totalCommits = totalCommits;
      state.projectTrend = projectTrend;
      state.trackedProjects = new Map(trackedProjects.map(p => [p.id, p]));
    });
  }
}
