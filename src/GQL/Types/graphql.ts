/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Matrix: { input: number[][]; output: number[][]; }
  Mesh: { input: { [key: string]: { [key: string]: number } }; output: { [key: string]: { [key: string]: number } }; }
};

export type CurrentUsersTeam = {
  __typename?: 'CurrentUsersTeam';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['Int']['output'];
  projects: Array<TrackedRepositoryType>;
  role: RoleType;
  users: Array<User>;
};

export type GithubUserAuthorizationType = {
  __typename?: 'GithubUserAuthorizationType';
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type InputRepository = {
  api_url: Scalars['String']['input'];
  clone_url: Scalars['String']['input'];
  created_at: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  html_url: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
  platform: Platform;
  platform_id: Scalars['Int']['input'];
  updated_at: Scalars['String']['input'];
};

export type Installation = {
  __typename?: 'Installation';
  id: Scalars['Int']['output'];
  installation_id: Scalars['Int']['output'];
  organizationId?: Maybe<Scalars['Int']['output']>;
  platform: Platform;
  type: InstallationType;
};

export enum InstallationType {
  Individual = 'individual',
  Organization = 'organization'
}

export type Mutation = {
  __typename?: 'Mutation';
  addNewUserToTeam: TeamStats;
  createGithubAccount: Scalars['Boolean']['output'];
  createTeam: CurrentUsersTeam;
  loginWithGithub: User;
  logout: Scalars['Boolean']['output'];
  setOrganizationRepositories: Scalars['Boolean']['output'];
  setRepositoryStats: Scalars['Boolean']['output'];
  trackRepository: Repository;
  verifyAnonymous: Scalars['Boolean']['output'];
  verifySession: Scalars['Boolean']['output'];
};


export type MutationAddNewUserToTeamArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
  role: UserRole;
  teamId: Scalars['Int']['input'];
};


export type MutationCreateGithubAccountArgs = {
  code: Scalars['String']['input'];
  installation_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateTeamArgs = {
  name: Scalars['String']['input'];
  organizationId: Scalars['Int']['input'];
};


export type MutationLoginWithGithubArgs = {
  code: Scalars['String']['input'];
};


export type MutationSetOrganizationRepositoriesArgs = {
  organizationId: Scalars['Int']['input'];
  repositories: Array<InputRepository>;
};


export type MutationSetRepositoryStatsArgs = {
  commits: Scalars['Int']['input'];
  lines: Scalars['Int']['input'];
  mesh: Scalars['Mesh']['input'];
  organizationId: Scalars['Int']['input'];
  pullRequests: Array<PullRequestEntry>;
  range?: InputMaybe<Schedule>;
  repositoryId: Scalars['Int']['input'];
  userStats: Array<UserContributionsInput>;
};


export type MutationTrackRepositoryArgs = {
  organizationId: Scalars['Int']['input'];
  repositoryId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};

export type OrgAffiliationType = {
  __typename?: 'OrgAffiliationType';
  id: Scalars['Int']['output'];
  installations: Array<Installation>;
  name: Scalars['String']['output'];
  roles: Array<RoleType>;
};

export type OverallStatsPerUser = {
  __typename?: 'OverallStatsPerUser';
  commits: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lines: Scalars['Int']['output'];
  linesPerMonth: Array<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  pullRequests: Scalars['Int']['output'];
};

export enum Platform {
  Bitbucket = 'bitbucket',
  Github = 'github'
}

export type ProjectCount = {
  __typename?: 'ProjectCount';
  commits: Scalars['Int']['output'];
  lines: Scalars['Int']['output'];
  totalProjects: Scalars['Int']['output'];
};

export type ProjectTrend = {
  __typename?: 'ProjectTrend';
  trackedProjects: Array<TeamProject>;
  trend: Scalars['Int']['output'];
};

export type PullRequest = {
  __typename?: 'PullRequest';
  author: Scalars['String']['output'];
  date: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  project: Scalars['String']['output'];
};

export type PullRequestEntry = {
  author: Scalars['String']['input'];
  date: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  availableRepositories: Array<Repository>;
  countLinesAndCommits: ProjectCount;
  installationSetup: Installation;
  myTeams: Array<CurrentUsersTeam>;
  overallStatsPerUser: TeamStats;
  standouts: Array<Standout>;
  teamMesh: TeamMesh;
  teamPullRequests: Array<PullRequest>;
  teammateProfile: TeammateProfile;
  teams: Array<Team>;
  totalRepositories: Scalars['Int']['output'];
  totalTeams: Scalars['Int']['output'];
  trackedRepositories: Array<Repository>;
  userAndAffiliations: UserAndAffiliations;
};


export type QueryAvailableRepositoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<RepositorySortKeys>;
};


export type QueryCountLinesAndCommitsArgs = {
  organizationId: Scalars['Int']['input'];
};


export type QueryInstallationSetupArgs = {
  installation_id: Scalars['Int']['input'];
  platform: Platform;
};


export type QueryMyTeamsArgs = {
  organizationId: Scalars['Int']['input'];
};


export type QueryOverallStatsPerUserArgs = {
  organizationId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};


export type QueryStandoutsArgs = {
  organizationId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};


export type QueryTeamMeshArgs = {
  organizationId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
};


export type QueryTeamPullRequestsArgs = {
  organizationId: Scalars['Int']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
};


export type QueryTeammateProfileArgs = {
  organizationId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type QueryTeamsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  omitCurrentUser?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTotalRepositoriesArgs = {
  organizationId: Scalars['Int']['input'];
  tracked?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTotalTeamsArgs = {
  organizationId: Scalars['Int']['input'];
};


export type QueryTrackedRepositoriesArgs = {
  organizationId: Scalars['Int']['input'];
  teamId?: InputMaybe<Scalars['Int']['input']>;
};

export type Repository = {
  __typename?: 'Repository';
  api_url: Scalars['String']['output'];
  clone_url: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  description: Scalars['String']['output'];
  html_url: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  platform: Platform;
  platform_id: Scalars['Int']['output'];
  updated_at: Scalars['String']['output'];
};

export enum RepositorySortKeys {
  CreatedAt = 'created_at',
  Language = 'language',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type RoleType = {
  __typename?: 'RoleType';
  role: UserRole;
};

export enum Schedule {
  Daily = 'daily',
  Monthly = 'monthly',
  Once = 'once',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export type Standout = {
  __typename?: 'Standout';
  id: Scalars['Int']['output'];
  increase: Scalars['Int']['output'];
  lines: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  availableRepositoriesStream: Array<Repository>;
  installationSetupStream: Installation;
};


export type SubscriptionAvailableRepositoriesStreamArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<RepositorySortKeys>;
};


export type SubscriptionInstallationSetupStreamArgs = {
  installation_id: Scalars['Int']['input'];
  platform: Platform;
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['Int']['output'];
  projects: Array<TrackedRepositoryType>;
  users: Array<User>;
};

export type TeamMesh = {
  __typename?: 'TeamMesh';
  key: Array<Scalars['String']['output']>;
  mesh: Scalars['Matrix']['output'];
};

export type TeamProject = {
  __typename?: 'TeamProject';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TeamStats = {
  __typename?: 'TeamStats';
  commitTrend: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lineTrend: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  projects: ProjectTrend;
  totalCommits: Scalars['Int']['output'];
  totalLines: Scalars['Int']['output'];
  users: Array<OverallStatsPerUser>;
};

export type TeammateCollaborator = {
  __typename?: 'TeammateCollaborator';
  commits: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lines: Scalars['Int']['output'];
  linesPerMonth: Array<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  pullRequests: Scalars['Int']['output'];
  totalLines: Scalars['Int']['output'];
};

export type TeammateProfile = {
  __typename?: 'TeammateProfile';
  collaborators: Array<TeammateCollaborator>;
  commits: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lines: Scalars['Int']['output'];
  linesPerMonth: Array<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  pullRequests: Array<PullRequest>;
};

export type TrackedRepositoryType = {
  __typename?: 'TrackedRepositoryType';
  id: Scalars['Int']['output'];
  repository: Repository;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UserAndAffiliations = {
  __typename?: 'UserAndAffiliations';
  github?: Maybe<GithubUserAuthorizationType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  organizations: Array<OrgAffiliationType>;
};

export type UserContributionsInput = {
  commits: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  lines: Scalars['Int']['input'];
};

export enum UserRole {
  Admin = 'admin',
  Manager = 'manager',
  Viewer = 'viewer'
}

export type TeamFragmentFragment = { __typename?: 'Team', id: number, name: string, users: Array<{ __typename?: 'User', id: number, name: string }>, projects: Array<{ __typename?: 'TrackedRepositoryType', repository: { __typename?: 'Repository', id: number, name: string } }> };

export type MyTeamFragmentFragment = { __typename?: 'CurrentUsersTeam', id: number, name: string, role: { __typename?: 'RoleType', role: UserRole }, users: Array<{ __typename?: 'User', id: number, name: string }>, projects: Array<{ __typename?: 'TrackedRepositoryType', repository: { __typename?: 'Repository', id: number, name: string } }> };

export type RepositoryFragmentFragment = { __typename?: 'Repository', id: number, name: string, description: string, html_url: string, language: string, platform: Platform, api_url: string, platform_id: number };

export type TeammateStatsFragment = { __typename?: 'OverallStatsPerUser', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number> };

export type TeammateProfileStatsFragment = { __typename?: 'TeammateCollaborator', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number>, totalLines: number };

export type TeammateProfileFragmentFragment = { __typename?: 'TeammateProfile', id: number, name: string, lines: number, commits: number, linesPerMonth: Array<number>, pullRequests: Array<{ __typename?: 'PullRequest', id: number, date: string, author: string, project: string, description: string }> };

export type StatsPerUserFragment = { __typename?: 'TeamStats', id: number, name: string, lineTrend: number, totalLines: number, commitTrend: number, totalCommits: number, users: Array<{ __typename?: 'OverallStatsPerUser', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number> }>, projects: { __typename?: 'ProjectTrend', trend: number, trackedProjects: Array<{ __typename?: 'TeamProject', id: number, name: string }> } };

export type LoginWithGithubMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LoginWithGithubMutation = { __typename?: 'Mutation', loginWithGithub: { __typename?: 'User', id: number } };

export type VerifySessionMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifySessionMutation = { __typename?: 'Mutation', verifySession: boolean };

export type AddNewUserToTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  role: UserRole;
  teamId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type AddNewUserToTeamMutation = { __typename?: 'Mutation', addNewUserToTeam: { __typename?: 'TeamStats', id: number, name: string, lineTrend: number, totalLines: number, commitTrend: number, totalCommits: number, users: Array<{ __typename?: 'OverallStatsPerUser', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number> }>, projects: { __typename?: 'ProjectTrend', trend: number, trackedProjects: Array<{ __typename?: 'TeamProject', id: number, name: string }> } } };

export type CountLinesAndCommitsQueryVariables = Exact<{
  organizationId: Scalars['Int']['input'];
}>;


export type CountLinesAndCommitsQuery = { __typename?: 'Query', countLinesAndCommits: { __typename?: 'ProjectCount', lines: number, commits: number, totalProjects: number } };

export type CreateGithubAccountMutationVariables = Exact<{
  code: Scalars['String']['input'];
  installation_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateGithubAccountMutation = { __typename?: 'Mutation', createGithubAccount: boolean };

export type InstallationSetupStreamSubscriptionVariables = Exact<{
  installation_id: Scalars['Int']['input'];
  platform: Platform;
}>;


export type InstallationSetupStreamSubscription = { __typename?: 'Subscription', installationSetupStream: { __typename?: 'Installation', id: number } };

export type InstallationSetupQueryVariables = Exact<{
  installation_id: Scalars['Int']['input'];
  platform: Platform;
}>;


export type InstallationSetupQuery = { __typename?: 'Query', installationSetup: { __typename?: 'Installation', id: number } };

export type OverallStatsPerUserQueryVariables = Exact<{
  teamId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type OverallStatsPerUserQuery = { __typename?: 'Query', overallStatsPerUser: { __typename?: 'TeamStats', id: number, name: string, lineTrend: number, totalLines: number, commitTrend: number, totalCommits: number, users: Array<{ __typename?: 'OverallStatsPerUser', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number> }>, projects: { __typename?: 'ProjectTrend', trend: number, trackedProjects: Array<{ __typename?: 'TeamProject', id: number, name: string }> } } };

export type AvailableRepositoriesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['Int']['input'];
  sort?: InputMaybe<RepositorySortKeys>;
}>;


export type AvailableRepositoriesQuery = { __typename?: 'Query', availableRepositories: Array<{ __typename?: 'Repository', id: number, name: string, description: string, html_url: string, language: string, platform: Platform, api_url: string, platform_id: number }> };

export type AvailableRepositoriesStreamSubscriptionVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['Int']['input'];
  sort?: InputMaybe<RepositorySortKeys>;
}>;


export type AvailableRepositoriesStreamSubscription = { __typename?: 'Subscription', availableRepositoriesStream: Array<{ __typename?: 'Repository', id: number, name: string, description: string, html_url: string, language: string, platform: Platform, api_url: string, platform_id: number }> };

export type TrackedRepositoriesQueryVariables = Exact<{
  organizationId: Scalars['Int']['input'];
  teamId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TrackedRepositoriesQuery = { __typename?: 'Query', trackedRepositories: Array<{ __typename?: 'Repository', id: number, name: string }> };

export type TrackRepositoryMutationVariables = Exact<{
  teamId: Scalars['Int']['input'];
  repositoryId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type TrackRepositoryMutation = { __typename?: 'Mutation', trackRepository: { __typename?: 'Repository', id: number, name: string } };

export type StandoutsQueryVariables = Exact<{
  teamId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type StandoutsQuery = { __typename?: 'Query', standouts: Array<{ __typename?: 'Standout', id: number, name: string, lines: number, increase: number }> };

export type TeamMeshQueryVariables = Exact<{
  teamId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type TeamMeshQuery = { __typename?: 'Query', teamMesh: { __typename?: 'TeamMesh', key: Array<string>, mesh: number[][] } };

export type TeamPullRequestsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  teamId: Scalars['Int']['input'];
  organizationId: Scalars['Int']['input'];
}>;


export type TeamPullRequestsQuery = { __typename?: 'Query', teamPullRequests: Array<{ __typename?: 'PullRequest', id: number, date: string, author: string, project: string, description: string }> };

export type TeammateProfileQueryVariables = Exact<{
  organizationId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type TeammateProfileQuery = { __typename?: 'Query', teammateProfile: { __typename?: 'TeammateProfile', id: number, name: string, lines: number, commits: number, linesPerMonth: Array<number>, collaborators: Array<{ __typename?: 'TeammateCollaborator', id: number, name: string, lines: number, commits: number, pullRequests: number, linesPerMonth: Array<number>, totalLines: number }>, pullRequests: Array<{ __typename?: 'PullRequest', id: number, date: string, author: string, project: string, description: string }> } };

export type TeamsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['Int']['input'];
  omitCurrentUser?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type TeamsQuery = { __typename?: 'Query', teams: Array<{ __typename?: 'Team', id: number, name: string, users: Array<{ __typename?: 'User', id: number, name: string }>, projects: Array<{ __typename?: 'TrackedRepositoryType', repository: { __typename?: 'Repository', id: number, name: string } }> }> };

export type CreateTeamMutationVariables = Exact<{
  organizationId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateTeamMutation = { __typename?: 'Mutation', createTeam: { __typename?: 'CurrentUsersTeam', id: number, name: string, role: { __typename?: 'RoleType', role: UserRole }, users: Array<{ __typename?: 'User', id: number, name: string }>, projects: Array<{ __typename?: 'TrackedRepositoryType', repository: { __typename?: 'Repository', id: number, name: string } }> } };

export type MyTeamsQueryVariables = Exact<{
  organizationId: Scalars['Int']['input'];
}>;


export type MyTeamsQuery = { __typename?: 'Query', myTeams: Array<{ __typename?: 'CurrentUsersTeam', id: number, name: string, role: { __typename?: 'RoleType', role: UserRole }, users: Array<{ __typename?: 'User', id: number, name: string }>, projects: Array<{ __typename?: 'TrackedRepositoryType', repository: { __typename?: 'Repository', id: number, name: string } }> }> };

export type UserAndAffiliationsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAndAffiliationsQuery = { __typename?: 'Query', userAndAffiliations: { __typename?: 'UserAndAffiliations', id: number, name: string, organizations: Array<{ __typename?: 'OrgAffiliationType', name: string, id: number, roles: Array<{ __typename?: 'RoleType', role: UserRole }>, installations: Array<{ __typename?: 'Installation', id: number, type: InstallationType, platform: Platform }> }>, github?: { __typename?: 'GithubUserAuthorizationType', token: string } | null } };

export type VerifyAnonymousMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifyAnonymousMutation = { __typename?: 'Mutation', verifyAnonymous: boolean };

export const TeamFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TeamFragmentFragment, unknown>;
export const MyTeamFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyTeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUsersTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MyTeamFragmentFragment, unknown>;
export const RepositoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"api_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_id"}}]}}]} as unknown as DocumentNode<RepositoryFragmentFragment, unknown>;
export const TeammateProfileStatsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateProfileStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeammateCollaborator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}}]}}]} as unknown as DocumentNode<TeammateProfileStatsFragment, unknown>;
export const TeammateProfileFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeammateProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"project"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TeammateProfileFragmentFragment, unknown>;
export const TeammateStatsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverallStatsPerUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}}]}}]} as unknown as DocumentNode<TeammateStatsFragment, unknown>;
export const StatsPerUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StatsPerUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lineTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}},{"kind":"Field","name":{"kind":"Name","value":"commitTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalCommits"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeammateStats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trend"}},{"kind":"Field","name":{"kind":"Name","value":"trackedProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverallStatsPerUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}}]}}]} as unknown as DocumentNode<StatsPerUserFragment, unknown>;
export const LoginWithGithubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginWithGithub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginWithGithub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LoginWithGithubMutation, LoginWithGithubMutationVariables>;
export const VerifySessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifySession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifySession"}}]}}]} as unknown as DocumentNode<VerifySessionMutation, VerifySessionMutationVariables>;
export const AddNewUserToTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addNewUserToTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"role"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserRole"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addNewUserToTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"role"},"value":{"kind":"Variable","name":{"kind":"Name","value":"role"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StatsPerUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverallStatsPerUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StatsPerUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lineTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}},{"kind":"Field","name":{"kind":"Name","value":"commitTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalCommits"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeammateStats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trend"}},{"kind":"Field","name":{"kind":"Name","value":"trackedProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<AddNewUserToTeamMutation, AddNewUserToTeamMutationVariables>;
export const CountLinesAndCommitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"countLinesAndCommits"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"countLinesAndCommits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"totalProjects"}}]}}]}}]} as unknown as DocumentNode<CountLinesAndCommitsQuery, CountLinesAndCommitsQueryVariables>;
export const CreateGithubAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGithubAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGithubAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<CreateGithubAccountMutation, CreateGithubAccountMutationVariables>;
export const InstallationSetupStreamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"installationSetupStream"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Platform"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installationSetupStream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InstallationSetupStreamSubscription, InstallationSetupStreamSubscriptionVariables>;
export const InstallationSetupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"installationSetup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Platform"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installationSetup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InstallationSetupQuery, InstallationSetupQueryVariables>;
export const OverallStatsPerUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"overallStatsPerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"overallStatsPerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"StatsPerUser"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OverallStatsPerUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StatsPerUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeamStats"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lineTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}},{"kind":"Field","name":{"kind":"Name","value":"commitTrend"}},{"kind":"Field","name":{"kind":"Name","value":"totalCommits"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeammateStats"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trend"}},{"kind":"Field","name":{"kind":"Name","value":"trackedProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<OverallStatsPerUserQuery, OverallStatsPerUserQueryVariables>;
export const AvailableRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"availableRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositorySortKeys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositoryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"api_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_id"}}]}}]} as unknown as DocumentNode<AvailableRepositoriesQuery, AvailableRepositoriesQueryVariables>;
export const AvailableRepositoriesStreamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"availableRepositoriesStream"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RepositorySortKeys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"availableRepositoriesStream"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RepositoryFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"api_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_id"}}]}}]} as unknown as DocumentNode<AvailableRepositoriesStreamSubscription, AvailableRepositoriesStreamSubscriptionVariables>;
export const TrackedRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"trackedRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackedRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TrackedRepositoriesQuery, TrackedRepositoriesQueryVariables>;
export const TrackRepositoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"trackRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"repositoryId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"repositoryId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TrackRepositoryMutation, TrackRepositoryMutationVariables>;
export const StandoutsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"standouts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"standouts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"increase"}}]}}]}}]} as unknown as DocumentNode<StandoutsQuery, StandoutsQueryVariables>;
export const TeamMeshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamMesh"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMesh"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"mesh"}}]}}]}}]} as unknown as DocumentNode<TeamMeshQuery, TeamMeshQueryVariables>;
export const TeamPullRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teamPullRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamPullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"teamId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"teamId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"project"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<TeamPullRequestsQuery, TeamPullRequestsQueryVariables>;
export const TeammateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teammateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teammateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeammateProfileFragment"}},{"kind":"Field","name":{"kind":"Name","value":"collaborators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeammateProfileStats"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateProfileFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeammateProfile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"project"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeammateProfileStats"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TeammateCollaborator"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"lines"}},{"kind":"Field","name":{"kind":"Name","value":"commits"}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"}},{"kind":"Field","name":{"kind":"Name","value":"linesPerMonth"}},{"kind":"Field","name":{"kind":"Name","value":"totalLines"}}]}}]} as unknown as DocumentNode<TeammateProfileQuery, TeammateProfileQueryVariables>;
export const TeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"teams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"omitCurrentUser"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"omitCurrentUser"},"value":{"kind":"Variable","name":{"kind":"Name","value":"omitCurrentUser"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TeamFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Team"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TeamsQuery, TeamsQueryVariables>;
export const CreateTeamDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyTeamFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyTeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUsersTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTeamMutation, CreateTeamMutationVariables>;
export const MyTeamsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myTeams"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myTeams"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MyTeamFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyTeamFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CurrentUsersTeam"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MyTeamsQuery, MyTeamsQueryVariables>;
export const UserAndAffiliationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userAndAffiliations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAndAffiliations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"installations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<UserAndAffiliationsQuery, UserAndAffiliationsQueryVariables>;
export const VerifyAnonymousDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAnonymous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAnonymous"}}]}}]} as unknown as DocumentNode<VerifyAnonymousMutation, VerifyAnonymousMutationVariables>;