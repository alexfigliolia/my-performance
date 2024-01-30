import "react";

declare module "react" {
  export interface CSSProperties {
    "--progress-stroke"?: string;
  }
}
