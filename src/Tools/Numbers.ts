export class Numbers {
  public static readonly ordinalMap: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  public static readonly formatter = new Intl.NumberFormat("en-US");
  public static readonly ordinal = new Intl.PluralRules("en-US", {
    type: "ordinal",
  });

  public static format(n: number) {
    return this.formatter.format(n);
  }

  public static formatOrdinal(n: number) {
    return `${n}${this.ordinalMap[this.ordinal.select(n)]}`;
  }

  public static getOrdinal(n: number) {
    return this.ordinalMap[this.ordinal.select(n)];
  }

  public static abbreviate(n: number) {
    if (n > 1_000_000) {
      return `${(n / 1_000_000).toFixed(1)}M`;
    }
    if (n > 1000) {
      return `${(n / 1000).toFixed(1)}K`;
    }
    return `${n}`;
  }
}
