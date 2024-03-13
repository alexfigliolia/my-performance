import { type CancelFN, TaskQueue } from "@figliolia/task-queue";
import type { NodeList } from "./types";

export class Controller {
  private duration: number;
  private cancelFN?: CancelFN;
  private shadowNode?: HTMLDivElement;
  private Queue = new TaskQueue();
  private static PARSER = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
  constructor(duration: number) {
    this.duration = duration;
  }

  public activate(callback: () => void, delay: number) {
    this.cancelFN?.();
    this.cancelFN = this.Queue.deferTask(callback, delay);
  }

  public getHeight() {
    if (!this.shadowNode) {
      return undefined;
    }
    return this.shadowNode.getBoundingClientRect().height;
  }

  public cacheReference = (shadowNode: HTMLDivElement) => {
    this.shadowNode = shadowNode;
  };

  public clearQueue() {
    return this.Queue.clearDeferredTasks();
  }

  public getTransition(animate: boolean, value: string) {
    const base = {
      transition: `transform ${this.duration}ms cubic-bezier(0, 0.55, 0.45, 1)`,
    };
    if (!animate) {
      return base;
    }
    // @ts-ignore
    if (parseInt(value) == value) {
      const dist = parseInt(value) + 1;
      return { ...base, transform: `translateY(-${dist * 100}%)` };
    }
    return { ...base, transform: `translateY(-${100}%)` };
  }

  public setup(value: string | number) {
    const tokens = Controller.PARSER.exec(`${value}`) || [];
    tokens.shift();
    const nodeList: NodeList[] = [];
    for (const res of tokens) {
      if (res === null || res === undefined) {
        continue;
      }
      // @ts-ignore
      if (isNaN(res)) {
        nodeList.push({ value: res, children: [res] });
      } else {
        for (let i = 0; i < res.length; i++) {
          const value = res[i];
          const int = parseInt(value);
          if (isNaN(int)) {
            continue;
          }
          const children = value
            ? new Array(parseInt(value) + 1)
                // @ts-ignore
                .join(0)
                // @ts-ignore
                .split(0)
                .map((_, i) => i)
            : [];
          nodeList.push({ value, children });
        }
      }
    }
    return nodeList;
  }
}
