import type {
  VerifySessionMutation,
  VerifySessionMutationVariables,
} from "GQL";
import { GQLRequest, verifySessionMutation } from "GQL";
import { Navigation } from "State/Navigation";
import { Organizations } from "State/Organizations";
import { User } from "State/User";

export class Authenticator {
  private static time = -Infinity;

  public static async validateSession() {
    try {
      const result = await this.checkSession();
      const { user, organizations } = result.data.verifySession;
      User.setUser(user);
      Organizations.initialize(organizations);
    } catch (error: any) {
      const redirect: string = error.message.toLowerCase();
      void Navigation.navigate(redirect);
    }
    return null;
  }

  public static async validateAnonymousUser() {
    try {
      const result = await this.checkSession();
      const { user, organizations } = result.data.verifySession;
      User.setUser(user);
      Organizations.initialize(organizations);
      void Navigation.navigate("/");
    } catch (error: any) {
      // Silence
    }
    return null;
  }

  private static checkSession() {
    return GQLRequest<VerifySessionMutation, VerifySessionMutationVariables>({
      query: verifySessionMutation,
      variables: {},
    });
  }
}
