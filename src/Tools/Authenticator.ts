import type {
  VerifyAnonymousMutation,
  VerifySessionMutation,
  VerifySessionMutationVariables,
} from "GQL";
import { GQLRequest, verifySessionMutation } from "GQL";
import { verifyAnonymous } from "GQL/Queries/verifyAnonymous.gql";
import { Navigation } from "State/Navigation";
import { Organizations } from "State/Organizations";
import { Platform } from "State/Platform";
import { User } from "State/User";

export class Authenticator {
  public static async validateSession() {
    try {
      const result = await GQLRequest<
        VerifySessionMutation,
        VerifySessionMutationVariables
      >({
        query: verifySessionMutation,
        variables: {},
      });
      const {
        user: { github = null, ...userInfo },
        organizations,
      } = result.data.verifySession;
      User.setUser(userInfo);
      Platform.setGithubCredentials(github);
      Organizations.initialize(organizations);
    } catch (error: any) {
      const redirect: string = error.message.toLowerCase();
      void Navigation.navigate(redirect);
    }
    return null;
  }

  public static async validateAnonymousUser() {
    try {
      const result = await GQLRequest<
        VerifyAnonymousMutation,
        VerifySessionMutationVariables
      >({
        query: verifyAnonymous,
        variables: {},
      });
      if (!result.data.verifyAnonymous) {
        void Navigation.navigate("/");
      }
    } catch (error: any) {
      // Silence
    }
    return null;
  }
}
