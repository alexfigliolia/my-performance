export interface IUser {
  id: number;
  name: string;
  githubToken: string;
}

export interface AffiliatedUser {
  id: number;
  name: string;
  github?: {
    token: string;
  } | null;
}
