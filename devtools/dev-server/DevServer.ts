import { join } from "path";
import { ChildProcess } from "@figliolia/child-process";

export class DevServer {
  public static ROOT = process.cwd();
  private static CPs: ChildProcess[] = [];
  private static readonly backendServices = [
    join(this.ROOT, "../my-perf-gql"),
    join(this.ROOT, "../my-perf-data-pulls"),
    join(this.ROOT, "../my-perf-stats-service"),
  ] as const;
  public static async start() {
    this.bindToExit();
    this.bootBackendServices();
    await this.bootFrontend();
    return Promise.all(this.CPs.map(CP => CP.handler));
  }

  private static bootFrontend() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        process.chdir(this.ROOT);
        this.CPs.push(new ChildProcess("yarn start"));
        resolve();
      }, 5000);
    });
  }

  private static bootBackendServices() {
    for (const service of this.backendServices) {
      process.chdir(service);
      this.CPs.push(
        new ChildProcess("yarn dev", { cwd: service, stdio: "inherit" }),
      );
    }
  }

  private static bindToExit() {
    const exit = () => {
      this.CPs.forEach(CP => CP.process.kill());
    };
    process.on("exit", exit);
    process.on("SIGINT", exit);
    process.on("SIGTERM", exit);
  }
}
