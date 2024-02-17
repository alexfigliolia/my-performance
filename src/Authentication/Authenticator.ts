import type {
  VerifyAnonymousMutation,
  VerifySessionMutation,
  VerifySessionMutationVariables,
} from "GQL";
import { GQLRequest, verifyAnonymous, verifySessionMutation } from "GQL";
import { Navigation } from "State/Navigation";
import { Onboarding } from "State/Onboarding";

export class Authenticator {
  public static async validateSession() {
    try {
      await GQLRequest<VerifySessionMutation, VerifySessionMutationVariables>({
        query: verifySessionMutation,
        variables: {},
      });
    } catch (error: any) {
      void Navigation.navigate("/login");
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

  public static validateSetup() {
    Onboarding.initialize();
    if (!Onboarding.validInstallation) {
      Onboarding.resetAll();
      void Navigation.navigate("/login");
    }
    return null;
  }
}
