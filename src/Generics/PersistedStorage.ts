export class BrowserStorageClient<T extends Record<string, string>> {
  public browserSupport =
    "localStorage" in window && window["localStorage"] !== null;

  public set<K extends Extract<keyof T, string>>(key: K, value: string) {
    if (this.browserSupport) {
      return localStorage.setItem(key, value);
    }
    document.cookie = name + "=" + value + "; path=/";
  }

  public get<K extends Extract<keyof T, string>>(key: K) {
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

  public delete<K extends Extract<keyof T, string>>(key: K) {
    if (this.browserSupport) {
      return localStorage.removeItem(key);
    }
    this.set(key, "");
  }
}
