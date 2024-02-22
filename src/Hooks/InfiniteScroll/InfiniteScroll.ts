import { Throttler } from "Generics/Throttler";
import type { Hook } from "Tools/Hooks";
import type { InfiniteScrollOptions } from "./types";

export class InfiniteScroll<T extends any[]> implements Hook {
  public inFlight = false;
  protected currentPage = 1;
  protected lastPageSize = 0;
  private Throttler: Throttler;
  private previousPosition = window.scrollY;
  public options: Required<InfiniteScrollOptions<T>>;
  constructor(options: InfiniteScrollOptions<T>) {
    this.options = Object.assign({}, InfiniteScroll.defaultOptionals, options);
    this.Throttler = new Throttler(this.loadSequence, 300);
  }

  public static defaultOptionals = {
    currentPage: 1,
  };

  public initialize() {
    void this.loadSequence().then(() => {
      window.addEventListener("scroll", this.onScroll);
    });
  }

  public switch(toggle: boolean) {
    if (toggle) {
      this.initialize();
    } else {
      this.destroy();
    }
  }

  public destroy() {
    this.reset();
    window.removeEventListener("scroll", this.onScroll);
    this.Throttler.clear();
  }

  public reset() {
    this.currentPage = 1;
    this.lastPageSize = 0;
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
    if (this.inFlight) {
      return;
    }
    if (window.scrollY < this.threshold) {
      return;
    }
    if (this.lastPageSize < this.get("pageSize")) {
      return;
    }
    if (this.delta < this.get("buffer")) {
      return;
    }
    return this.Throttler.execute();
  };

  private loadSequence = async () => {
    this.inFlight = true;
    this.previousPosition = window.scrollY;
    const results = await this.get("loadNextSequence")(this.currentPage);
    this.inFlight = false;
    this.lastPageSize = results.length;
    this.currentPage++;
    this.get("onData")(results);
  };

  private get threshold() {
    return document.body.clientHeight - window.innerHeight - this.get("buffer");
  }

  private get delta() {
    return Math.abs(this.previousPosition - window.scrollY);
  }
}
