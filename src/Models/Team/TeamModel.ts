import { QuickStack } from "Generics/QuickStack";
import { Networking } from "./Networking";

export class TeamModel extends Networking {
  constructor() {
    super("Team", {
      id: -1,
      name: "",
      search: "",
      team: [],
      loading: false,
      lineTrend: 0,
      totalLines: 0,
      commitTrend: 0,
      totalCommits: 0,
      key: [],
      mesh: [],
      standouts: [],
      projectTrend: 0,
      pullRequests: [],
      trackedProjects: new QuickStack(),
    });
  }

  public initializeRoute(ID: number) {
    this.reset();
    this.loading(true);
    this.setID(ID);
  }

  public loading(status: boolean) {
    return this.update(state => {
      state.loading = status;
    });
  }

  public setID(ID: number) {
    this.update(state => {
      state.id = ID;
    });
  }

  public search(value: string) {
    this.update(state => {
      state.search = value;
    });
  }
}
