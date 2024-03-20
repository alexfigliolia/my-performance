export class Dates {
  public static months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  public static today = new Date();
  public static LAST_12_MONTHS = this.last12Months();

  public static last12Months() {
    const dates: Date[] = [];
    for (let i = 0; i < 12; i++) {
      dates[11 - i] = new Date(
        this.today.getFullYear(),
        this.today.getMonth() - i,
        1,
      );
    }
    return dates;
  }

  public static format(date: Date) {
    return date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
