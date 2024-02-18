import type { ReactNode } from "react";

export interface Props {
  id: string;
  name?: string;
  multiple?: boolean;
  options: string[];
  value: Set<string>;
  label: string;
  onChange: (values: Set<string>) => void;
  renderOption?: (value: string) => ReactNode;
}
