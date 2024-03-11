export class Controller {
  public static getColors(output: number) {
    if (output < 5) {
      return ["rgba(255, 122, 122, 1)", "rgba(255, 21, 126, 1)"];
    }
    if (output < 10) {
      return ["rgba(255, 220, 122, 1)", "rgba(255, 132, 0, 1)"];
    }
    return ["rgba(133, 255, 122, 1)", "rgba(23, 225, 191, 1)"];
  }
}
