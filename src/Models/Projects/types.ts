export interface IProjects {
  lines: number;
  commits: number;
  trackedProjects: Map<number, { id: number; name: string }>;
}

export interface TrackedProject {
  id: number;
  name: string;
}
