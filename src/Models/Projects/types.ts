export interface IProjects {
  stream: boolean;
  totalProjects: number;
  trackedProjects: Map<number, { id: number; name: string }>;
}

export interface TrackedProject {
  id: number;
  name: string;
}
