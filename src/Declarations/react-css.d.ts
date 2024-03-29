import "react";

declare module "react" {
  export interface CSSProperties {
    "--progress-stroke"?: string;
    "--repo-link-hover-color"?: string;
    "--repo-icon-path-url"?: string;
    "--action-button-gradient"?: string;
    "--triangle-gradient"?: string;
    "--transition-delay"?: string;
    "--triangle-color1"?: string;
    "--triangle-color2"?: string;
    "--line-stroke-color"?: string;
  }
}
