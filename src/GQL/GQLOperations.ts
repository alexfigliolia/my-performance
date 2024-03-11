import { Toasts } from "State/Toasts";

export class GQLOperation {
  public static async wrapOperation(operation: () => Promise<void>) {
    try {
      await operation();
      return true;
    } catch (error: any) {
      Toasts.dispatch({
        type: "error",
        title: "Whoops!",
        message: error?.message ?? "Something went wrong. Please try again",
      });
      return false;
    }
  }
}
