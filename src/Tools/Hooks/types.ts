export interface Hook {
  initialize: () => void;
  switch: (toggle: boolean) => void;
  destroy: () => void;
}
