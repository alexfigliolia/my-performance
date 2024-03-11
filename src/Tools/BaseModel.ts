import { Logger, Profiler, State } from "@figliolia/galena";

export class BaseModel<T> extends State<T> {
  constructor(...params: ConstructorParameters<typeof State<T>>) {
    super(...params);
    BaseModel.bindMiddleware(this);
  }

  public set<K extends keyof T>(key: K, value: T[K]) {
    this.update(state => {
      state[key] = value;
    });
  }

  private static bindMiddleware(state: State<any>) {
    if (process.env.NODE_ENV === "development") {
      state.registerMiddleware(new Logger(), new Profiler());
    }
  }
}
