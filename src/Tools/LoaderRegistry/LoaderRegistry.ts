import { EventEmitter } from "@figliolia/event-emitter";
import type { Callback } from "Types/Generics";
import type { LoaderStream, LoadTask } from "./types";

export class LoaderRegistry<T> {
  public results?: T;
  public ready = false;
  private initialLoad = true;
  private transitions: boolean;
  private Emitter = new EventEmitter<LoaderStream<T>>();
  constructor(transitions = false) {
    this.transitions = transitions;
  }

  public async load(loader: Callback<T>) {
    if (!this.initialLoad && !this.transitions) {
      return;
    }
    this.initialLoad = false;
    this.reset();
    this.results = await loader();
    this.ready = true;
    this.Emitter.emit("execute", this.results);
    this.Emitter.clear();
  }

  public reset() {
    this.ready = false;
    this.results = undefined;
  }

  public register(LoadTask: LoadTask<T>) {
    if (this.ready && this.results !== undefined) {
      void LoadTask(this.results);
      return "-1";
    }
    return this.Emitter.on("execute", LoadTask);
  }

  public unregister(ID: string) {
    return this.Emitter.off("execute", ID);
  }
}
