import { Throttler } from "Generics/Throttler";
import type { Hook } from "Tools/Hooks";
import type { InfiniteScrollOptions } from "./types";

export class InfiniteScroll<T extends any[]> implements Hook {
  public inFlight = false;
  protected currentPage = 1;
  protected lastPageSize = 0;
  private Throttler: Throttler;
  protected preventInitialization = false;
  public options: InfiniteScrollOptions<T>;
  private previousPosition = window.scrollY;
  constructor(options: InfiniteScrollOptions<T>) {
    this.options = options;
    this.Throttler = new Throttler(this.loadSequence, 300);
  }

  public initialize() {
    if (this.preventInitialization) {
      return;
    }
    window.addEventListener("scroll", this.onScroll);
  }

  public switch(toggle: boolean) {
    if (this.preventInitialization) {
      return;
    }
    if (toggle) {
      this.initialize();
    } else {
      this.destroy();
    }
  }

  public destroy() {
    window.removeEventListener("scroll", this.onScroll);
    this.preventInitialization = true;
    this.Throttler.clear();
  }

  public setCurrentPage(N: number) {
    this.currentPage = N;
  }

  public setLastPageSize(N: number) {
    this.lastPageSize = N;
  }

  public get<K extends keyof InfiniteScrollOptions<T>>(
    key: K,
  ): InfiniteScrollOptions<T>[K] {
    return this.options[key];
  }

  protected onScroll = () => {
    if (window.scrollY < this.threshold) {
      return;
    }
    if (this.lastPageSize === 0 || this.inFlight) {
      return;
    }
    if (this.delta < this.get("buffer")) {
      return;
    }
    return this.Throttler.execute();
  };

  private loadSequence = () => {
    this.inFlight = true;
    void this.get("loadNextSequence")(this.currentPage).then(result => {
      this.lastPageSize = result.length;
      this.currentPage++;
      if (this.lastPageSize === 0) {
        this.destroy();
      }
      this.inFlight = false;
      this.get("onData")(result);
    });
  };

  private get threshold() {
    return document.body.clientHeight - window.innerHeight - this.get("buffer");
  }

  private get delta() {
    return Math.abs(this.previousPosition - window.scrollY);
  }
}
