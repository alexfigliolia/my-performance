export interface IScreen {
  width: number;
  height: number;
}

export interface INavigation {
  search: string;
  pathname: string;
  menuOpen: boolean;
}

export interface IAuth {
  name: string;
  token: string;
}
