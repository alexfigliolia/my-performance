export interface PlatformCredentials {
  id: number;
  token: string;
}

export interface IPlatform {
  github: PlatformCredentials | null;
}
