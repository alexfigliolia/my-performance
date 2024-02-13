export class PersistedStorage {
  public static browserSupport =
    "localStorage" in window && window["localStorage"] !== null;

  public static set(key: string, value: string) {
    if (this.browserSupport) {
      return localStorage.setItem(key, value);
    }
    document.cookie = name + "=" + value + "; path=/";
  }

  public static get(key: string) {
    if (this.browserSupport) {
      return localStorage.getItem(key) || "";
    }
    const nameEQ = key + "=";
    const tokens = document.cookie.split(";");
    for (let i = 0; i < tokens.length; i++) {
      let c = tokens[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.startsWith(nameEQ)) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return "";
  }

  public static delete(key: string) {
    if (this.browserSupport) {
      return localStorage.removeItem(key);
    }
    this.set(key, "");
  }
}
