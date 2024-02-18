import type { FocusEvent, MouseEvent } from "react";
import React, { Component } from "react";
import { ModalStack } from "Tools/ModalStack";
import type { Props } from "../types";
import { Controller } from "./Controller";
import "./styles.scss";

export class DefaultSelect extends Component<Props, State> {
  private closer = () => {
    this.setState({ open: false });
    ModalStack.delete(this.closer);
  };
  public state: State = { open: false };
  private controller = new Controller(this.closer);
  private valueList = Array.from(this.props.value);

  public override shouldComponentUpdate(nextProps: Props, { open }: State) {
    if (nextProps !== this.props) {
      this.valueList = Array.from(nextProps.value);
      return true;
    }
    return open !== this.state.open;
  }

  public override componentDidUpdate(_: Props, ps: State) {
    if (ps !== this.state) {
      this.controller.switch(this.state.open);
    }
  }

  public override componentWillUnmount() {
    this.controller.destroy();
  }

  private open = (
    e: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (!this.state.open) {
      ModalStack.push(this.closer);
    }
    this.setState({ open: true });
  };

  private onChange = (value: string) => {
    return (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const { multiple, value: currentValue, onChange } = this.props;
      if (currentValue.has(value)) {
        const next = new Set(currentValue);
        next.delete(value);
        return onChange(next);
      }
      if (multiple) {
        return onChange(new Set([...currentValue, value]));
      }
      onChange(new Set([value]));
      this.closer();
    };
  };

  private get populated() {
    return this.valueList.some(v => !!v);
  }

  public override render() {
    const { open } = this.state;
    const { id, options, label, value, renderOption = v => v } = this.props;
    return (
      <div
        ref={this.controller.node("container")}
        className={`default-select generic-input ${this.populated || open ? "focus" : ""}`}>
        <button
          className="toggler"
          aria-label="toggle"
          onFocus={this.open}
          onClick={this.open}
        />
        <label htmlFor={id}>{label}</label>
        <span className="display-value">{this.valueList.join(", ")}</span>
        <div
          ref={this.controller.node("list")}
          className={`select-list ${open ? "open" : ""}`}>
          <div className="carrot" />
          <div className="options">
            {options.map(option => {
              return (
                <button
                  key={option}
                  onClick={this.onChange(option)}
                  className={`${value.has(option) ? "active" : ""}`}>
                  {renderOption(option)}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

interface State {
  open: boolean;
}
