import { EventEmitter } from "@figliolia/event-emitter";
import type { Callback } from "Types/Generics";
import type { LoaderStream, LoadTask } from "./types";

export class LoaderRegistry<T> {
  public results?: T;
  public ready = false;
  private Emitter = new EventEmitter<LoaderStream<T>>();

  public async load(loader: Callback<T>) {
    this.results = await loader();
    this.ready = true;
    this.Emitter.emit("execute", this.results);
    this.reset();
  }

  public reset() {
    this.ready = false;
    this.results = undefined;
  }

  public clear() {
    this.reset();
    this.Emitter.clear();
  }

  public register(LoadTask: LoadTask<T>) {
    if (this.ready && this.results !== undefined) {
      void LoadTask(this.results);
    }
    return this.Emitter.on("execute", LoadTask);
  }

  public unregister(ID: string) {
    return this.Emitter.off("execute", ID);
  }
}
