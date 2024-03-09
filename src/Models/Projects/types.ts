export interface IProjects {
  lines: number;
  stream: boolean;
  commits: number;
  totalProjects: number;
  trackedProjects: Map<number, { id: number; name: string }>;
}

export interface TrackedProject {
  id: number;
  name: string;
}
