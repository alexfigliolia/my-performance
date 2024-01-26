import { AutoIncrementingID } from "@figliolia/event-emitter";
import type { Datum, GraphState, Listener, Options } from "./types";
import { Screen } from "State/Screen";

export class Controller extends Map<string, Listener> implements GraphState {
  min: number;
  max: number;
  barSize = 0;
  width = 200;
  height = 200;
  barRadius = 0;
  data: Datum[];
  zeroMin: boolean;
  node?: HTMLElement;
  yAxis: number[] = [];
  subscription: string;
  private IDs = new AutoIncrementingID();
  private static readonly GAP_SIZE = 5;
  private static readonly FONT_SIZE = 12;
  private static readonly MIN_BAR_SIZE = 10;
  private static readonly MAX_BAR_SIZE = 30;
  constructor({ data, zeroMin }: Options) {
    super();
    this.data = data;
    this.zeroMin = zeroMin;
    const [min, max] = this.minMax();
    this.min = min;
    this.max = max;
    this.subscription = Screen.subscribe(this.updateDimensions);
  }

  public get state() {
    return {
      min: this.min,
      max: this.max,
      data: this.data,
      yAxis: this.yAxis,
      barSize: this.barSize,
      barRadius: this.barRadius,
    };
  }

  public register(node: HTMLElement) {
    this.node = node;
    this.axis();
    this.emit();
  }

  public update({ data, zeroMin }: Options) {
    this.zeroMin = zeroMin;
    this.data = data;
    const [min, max] = this.minMax();
    this.min = min;
    this.max = max;
    this.axis();
    this.emit();
  }

  public on(listener: Listener, pull = false) {
    const ID = this.IDs.get();
    super.set(ID, listener);
    if (pull) {
      void listener(this.state);
    }
    return ID;
  }

  public off(ID: string) {
    super.delete(ID);
  }

  public destroy() {
    Screen.unsubscribe(this.subscription);
  }

  private updateDimensions = () => {
    if (this.axis()) {
      this.emit();
    }
  };

  private emit() {
    for (const [, listener] of this) {
      void listener(this.state);
    }
  }

  private minMax(): [min: number, max: number] {
    let max = -Infinity;
    let min = this.zeroMin ? 0 : Infinity;
    for (const { value } of this.data) {
      if (value > max) {
        max = value;
      }
      if (value < min) {
        min = value;
      }
    }
    return [min, max];
  }

  private axis() {
    try {
      const { height, width } = this.measure();
      this.createYAxis(height);
      this.sizeBars(width);
      return true;
    } catch (error) {
      return false;
    }
  }

  private createYAxis(height: number) {
    this.height = height;
    const diff = height / Controller.FONT_SIZE;
    const gaps = Math.floor(diff / 4);
    const min = this.zeroMin ? 0 : this.min;
    const spread = this.max - min;
    const increment = Math.floor(spread / gaps);
    const yAxis = [this.max];
    for (let i = 1; i < gaps; i++) {
      yAxis.push(this.max - increment * i);
    }
    yAxis.push(min);
    this.yAxis = yAxis;
  }

  private sizeBars(width: number) {
    this.width = width;
    this.barSize = Math.max(
      Controller.MIN_BAR_SIZE,
      Math.min(
        Controller.MAX_BAR_SIZE,
        width / (Controller.MIN_BAR_SIZE + Controller.GAP_SIZE) -
          Controller.GAP_SIZE,
      ),
    );
    this.barRadius = this.barSize / 2;
  }

  private guard() {
    if (!this.node) {
      throw new Error("Attempting to measure non-registered node");
    }
    return this.node;
  }

  private measure() {
    const node = this.guard();
    return node.getBoundingClientRect();
  }
}
