export class Environment {
  public static ORG = !!import.meta.env.ORG;
  public static readonly GITHUB_CLIENT_ID = this.parseClientID();

  private static parseClientID() {
    if (this.ORG) {
      return import.meta.env.VITE_GITHUB_ORG_CLIENT_ID;
    }
    return import.meta.env.VITE_GITHUB_CLIENT_ID;
  }
}
