import "react";

declare module "react" {
  export interface CSSProperties {
    "--progress-stroke"?: string;
    "--repo-link-hover-color"?: string;
    "--repo-icon-path-url"?: string;
    "--triangle-gradient"?: string;
    "--transition-delay"?: string;
  }
}
