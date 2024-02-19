import React, { Component } from "react";
import type { IColumn, IRow } from "./types";
import "./styles.scss";

export class Table<C extends Readonly<IColumn[]>> extends Component<Props<C>> {
  public override render() {
    const { columns, data } = this.props;
    return (
      <table className="base-table">
        <thead>
          <tr>
            {columns.map(({ key, displayName, className }) => {
              return (
                <th key={key} className={className}>
                  {displayName || key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            return (
              <tr key={i}>
                {columns.map(({ key }) => {
                  return <td key={key}>{row[key as C[number]["key"]]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

interface Props<C extends Readonly<IColumn[]>> {
  columns: C;
  data: IRow<C>[];
}
