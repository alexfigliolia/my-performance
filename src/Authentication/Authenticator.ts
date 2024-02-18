import { redirect } from "react-router-dom";
import type {
  VerifyAnonymousMutation,
  VerifySessionMutation,
  VerifySessionMutationVariables,
} from "GQL";
import { GQLRequest, verifyAnonymous, verifySessionMutation } from "GQL";
import { Onboarding } from "State/Onboarding";

export class Authenticator {
  public static async verifySession() {
    try {
      await GQLRequest<VerifySessionMutation, VerifySessionMutationVariables>({
        query: verifySessionMutation,
        variables: {},
      });
    } catch (error: any) {
      throw redirect("/login");
    }
    return null;
  }

  public static async verifyAnonymous() {
    try {
      const result = await GQLRequest<
        VerifyAnonymousMutation,
        VerifySessionMutationVariables
      >({
        query: verifyAnonymous,
        variables: {},
      });
      if (!result.data.verifyAnonymous) {
        throw redirect("/");
      }
      return null;
    } catch (error: any) {
      throw redirect("/");
    }
  }

  public static validateSetup() {
    Onboarding.initialize();
    if (!Onboarding.validInstallation) {
      Onboarding.resetAll();
      throw redirect("/login");
    }
    return null;
  }

  public static validateSignUp() {
    Onboarding.initialize();
    if (!Onboarding.validInstallation) {
      Onboarding.resetInstallationParams();
    }
    return null;
  }

  public static validLogin() {
    Onboarding.initialize();
    if (!Onboarding.validAuthentication) {
      Onboarding.resetAll();
    }
    return null;
  }
}
