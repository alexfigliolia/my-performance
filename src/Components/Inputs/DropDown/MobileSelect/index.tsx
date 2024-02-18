import type { ChangeEvent } from "react";
import React, { Component } from "react";
import type { Props } from "../types";
import "./styles.scss";

export class MobileSelect extends Component<Props> {
  private valueList = Array.from(this.props.value);

  public override shouldComponentUpdate(nextProps: Props) {
    if (nextProps !== this.props) {
      this.valueList = Array.from(nextProps.value);
      return true;
    }
    return false;
  }

  private onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const { multiple, value: currentValue, onChange } = this.props;
    if (currentValue.has(value)) {
      const next = new Set(currentValue);
      next.delete(value);
      return onChange(next);
    }
    if (multiple) {
      return onChange(new Set([...currentValue, value]));
    }
    return onChange(new Set([value]));
  };

  private get populated() {
    return this.valueList.some(v => !!v);
  }

  private get HTMLValue() {
    if (this.props.multiple) {
      return this.valueList;
    }
    return this.valueList[0];
  }

  private format(value: string) {
    const { renderOption = (v: string) => v } = this.props;
    let output = "";
    const tokens = value.split(" ");
    const { length } = tokens;
    let pointer = 0;
    for (const token of tokens) {
      const [first, ...rest] = token;
      output += `${first.toUpperCase()}${rest.join("")}`;
      if (++pointer < length) {
        output += " ";
      }
    }
    return renderOption(output);
  }

  public override render() {
    const { id, name = id, options, label, multiple } = this.props;
    return (
      <div
        className={`mobile-select generic-input ${this.populated ? "focus" : ""}`}>
        <label htmlFor={id}>{label}</label>
        <span className="display-value">{this.valueList.join(", ")}</span>
        <select
          id={id}
          name={name}
          multiple={multiple}
          value={this.HTMLValue}
          onChange={this.onChange}>
          <option value="" disabled>
            Options
          </option>
          {options.map(option => {
            return (
              <option key={option} value={option}>
                {this.format(option)}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
