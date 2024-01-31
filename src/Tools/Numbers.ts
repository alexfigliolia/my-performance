export class Numbers {
  public static readonly formatter = new Intl.NumberFormat("en-US");

  public static format(n: number) {
    return this.formatter.format(n);
  }
}
