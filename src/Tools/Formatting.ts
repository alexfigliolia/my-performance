export class Formatting {
  public static nameWithFirstInitial(name: string) {
    const [first, ...rest] = name.split(" ");
    const last = rest[rest.length - 1]?.[0];
    if (last) {
      return `${first} ${last}.`;
    }
    return first;
  }

  public static replaceNonAsci(str: string) {
    // eslint-disable-next-line no-control-regex
    return str.replace(/[^\x00-\x7F]/g, "");
  }
}
