import type { TeammateStatsQuery, TeammateStatsQueryVariables } from "GQL";
import { GQLServiceRequest, teammateStats } from "GQL";
import { Organizations } from "State/Organizations";
import { Toasts } from "State/Toasts";
import { User } from "State/User";
import { BaseModel } from "Tools/BaseModel";
import type { IGetProfile, IProfile } from "./types";

export class ProfileModel extends BaseModel<IProfile> {
  constructor() {
    super("Profile", {
      id: -1,
      name: "",
      loading: false,
      lines: 0,
      commits: 0,
      teams: [],
    });
  }

  public resetRoute() {
    this.reset();
    this.loading(true);
  }

  public loading(status: boolean) {
    this.update(state => {
      state.loading = status;
    });
  }

  public setUserID(id: number) {
    this.update(state => {
      state.id = id;
    });
  }

  public async getProfiles({
    userId = User.getState().id,
    organizationId = Organizations.getState().current,
  }: IGetProfile) {
    try {
      const response = await GQLServiceRequest<
        TeammateStatsQuery,
        TeammateStatsQueryVariables
      >({
        query: teammateStats,
        variables: {
          userId,
          organizationId,
        },
      });
      if (response.data) {
        const { id, name, lines, commits, teams } = response.data.teammateStats;
        this.update(state => {
          state.id = id;
          state.name = name;
          state.lines = lines;
          state.commits = commits;
          state.teams = teams;
        });
      }
    } catch (error: any) {
      return Toasts.dispatch({
        type: "error",
        title: "Slight Mishap!",
        message: error.message,
      });
    }
  }
}
