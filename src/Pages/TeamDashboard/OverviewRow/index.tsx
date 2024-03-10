import React, { Component } from "react";
import { Tile } from "Components/Layouts";
import { Collaboration } from "./Collaboration";
import { Contributors } from "./Contributors";
import "./styles.scss";

export class OverviewRow extends Component {
  tile1?: HTMLDivElement;
  tile2?: HTMLDivElement;

  public override componentDidMount() {
    if (this.tile1 && this.tile2) {
      this.tile2.style.height = `${
        this.tile1.getBoundingClientRect().height
      }px`;
    }
  }

  public override shouldComponentUpdate() {
    return false;
  }

  private cacheContributors = (node: HTMLDivElement) => {
    this.tile1 = node;
  };

  private cacheCollaboration = (node: HTMLDivElement) => {
    this.tile2 = node;
  };

  public override render() {
    return (
      <div className="row overview">
        <Tile
          heading="Contributors"
          nodeRef={this.cacheContributors}
          subheading="Here you'll find your highest contributors by lines of code">
          <Contributors />
        </Tile>
        <Tile
          heading="Collaboration"
          nodeRef={this.cacheCollaboration}
          subheading="Here you'll find which engineers collaborate with one another">
          <Collaboration />
        </Tile>
      </div>
    );
  }
}
