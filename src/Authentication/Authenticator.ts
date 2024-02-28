import { redirect } from "react-router-dom";
import type {
  VerifyAnonymousMutation,
  VerifySessionMutation,
  VerifySessionMutationVariables,
} from "GQL";
import { GQLServiceRequest, verifyAnonymous, verifySessionMutation } from "GQL";
import { Onboarding } from "State/Onboarding";

export class Authenticator {
  public static async verifySession() {
    try {
      await GQLServiceRequest<
        VerifySessionMutation,
        VerifySessionMutationVariables
      >({
        query: verifySessionMutation,
        variables: {},
      });
    } catch (error: any) {
      throw redirect("/login");
    }
  }

  public static async verifyAnonymous() {
    try {
      const result = await GQLServiceRequest<
        VerifyAnonymousMutation,
        VerifySessionMutationVariables
      >({
        query: verifyAnonymous,
        variables: {},
      });
      if (!result.data.verifyAnonymous) {
        throw redirect("/");
      }
    } catch (error: any) {
      if (error?.message === "/") {
        throw redirect("/");
      }
      return null;
    }
  }

  public static validateSetup() {
    Onboarding.initialize();
    if (!Onboarding.validInstallation) {
      Onboarding.resetAll();
      throw redirect("/login");
    }
  }

  public static validateSignUp() {
    Onboarding.initialize();
    if (!Onboarding.validInstallation) {
      Onboarding.resetInstallationParams();
    } else {
      Onboarding.clearQueryParams();
    }
  }

  public static validLogin() {
    Onboarding.initialize();
    if (!Onboarding.validAuthentication) {
      Onboarding.resetAll();
    }
  }
}
