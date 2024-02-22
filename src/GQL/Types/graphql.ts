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
};

export type AvailableRepository = {
  __typename?: 'AvailableRepository';
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
  tracked: Scalars['Boolean']['output'];
  updated_at: Scalars['String']['output'];
};

export type GithubUserAuthorizationType = {
  __typename?: 'GithubUserAuthorizationType';
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
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
  createGithubAccount: Scalars['Boolean']['output'];
  loginWithGithub: User;
  logout: Scalars['Boolean']['output'];
  trackRepository: AvailableRepository;
  verifyAnonymous: Scalars['Boolean']['output'];
  verifySession: Scalars['Boolean']['output'];
};


export type MutationCreateGithubAccountArgs = {
  code: Scalars['String']['input'];
  installation_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};


export type MutationLoginWithGithubArgs = {
  code: Scalars['String']['input'];
};


export type MutationTrackRepositoryArgs = {
  id: Scalars['Int']['input'];
};

export type OrgAffiliationType = {
  __typename?: 'OrgAffiliationType';
  id: Scalars['Int']['output'];
  installations: Array<Installation>;
  name: Scalars['String']['output'];
  roles: Array<RoleType>;
};

export enum Platform {
  Bitbucket = 'bitbucket',
  Github = 'github'
}

export type Query = {
  __typename?: 'Query';
  installationSetup: Installation;
  listAvailableRepositories: Array<AvailableRepository>;
  trackedRepositories: Array<AvailableRepository>;
  userAndAffiliations: UserAndAffiliations;
};


export type QueryInstallationSetupArgs = {
  installation_id: Scalars['Int']['input'];
  platform: Platform;
};


export type QueryListAvailableRepositoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrackedRepositoriesArgs = {
  organizationId: Scalars['Int']['input'];
};

export type RoleType = {
  __typename?: 'RoleType';
  role: UserRole;
};

export type Subscription = {
  __typename?: 'Subscription';
  installationSetup: Installation;
};


export type SubscriptionInstallationSetupArgs = {
  installation_id: Scalars['Int']['input'];
  platform: Platform;
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

export enum UserRole {
  Admin = 'admin',
  Manager = 'manager',
  Viewer = 'viewer'
}

export type RepositoryFragmentFragment = { __typename?: 'AvailableRepository', id: number, name: string, description: string, html_url: string, language: string, platform: Platform, api_url: string, platform_id: number };

export type LoginWithGithubMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type LoginWithGithubMutation = { __typename?: 'Mutation', loginWithGithub: { __typename?: 'User', id: number } };

export type ListAvailableRepositoriesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['Int']['input'];
}>;


export type ListAvailableRepositoriesQuery = { __typename?: 'Query', listAvailableRepositories: Array<{ __typename?: 'AvailableRepository', id: number, name: string, description: string, html_url: string, language: string, platform: Platform, api_url: string, platform_id: number }> };

export type VerifySessionMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifySessionMutation = { __typename?: 'Mutation', verifySession: boolean };

export type CreateGithubAccountMutationVariables = Exact<{
  code: Scalars['String']['input'];
  installation_id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
}>;


export type CreateGithubAccountMutation = { __typename?: 'Mutation', createGithubAccount: boolean };

export type InstallationSetupSubscriptionSubscriptionVariables = Exact<{
  installation_id: Scalars['Int']['input'];
  platform: Platform;
}>;


export type InstallationSetupSubscriptionSubscription = { __typename?: 'Subscription', installationSetup: { __typename?: 'Installation', id: number } };

export type InstallationSetupQueryQueryVariables = Exact<{
  installation_id: Scalars['Int']['input'];
  platform: Platform;
}>;


export type InstallationSetupQueryQuery = { __typename?: 'Query', installationSetup: { __typename?: 'Installation', id: number } };

export type TrackedRepositoriesQueryVariables = Exact<{
  organizationId: Scalars['Int']['input'];
}>;


export type TrackedRepositoriesQuery = { __typename?: 'Query', trackedRepositories: Array<{ __typename?: 'AvailableRepository', id: number, name: string }> };

export type TrackRepositoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type TrackRepositoryMutation = { __typename?: 'Mutation', trackRepository: { __typename?: 'AvailableRepository', id: number, name: string } };

export type UserAndAffiliationsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserAndAffiliationsQuery = { __typename?: 'Query', userAndAffiliations: { __typename?: 'UserAndAffiliations', id: number, name: string, organizations: Array<{ __typename?: 'OrgAffiliationType', name: string, id: number, roles: Array<{ __typename?: 'RoleType', role: UserRole }>, installations: Array<{ __typename?: 'Installation', id: number, type: InstallationType, platform: Platform }> }>, github?: { __typename?: 'GithubUserAuthorizationType', token: string } | null } };

export type VerifyAnonymousMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifyAnonymousMutation = { __typename?: 'Mutation', verifyAnonymous: boolean };

export const RepositoryFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RepositoryFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AvailableRepository"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"api_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_id"}}]}}]} as unknown as DocumentNode<RepositoryFragmentFragment, unknown>;
export const LoginWithGithubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginWithGithub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginWithGithub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<LoginWithGithubMutation, LoginWithGithubMutationVariables>;
export const ListAvailableRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listAvailableRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAvailableRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}},{"kind":"Field","name":{"kind":"Name","value":"api_url"}},{"kind":"Field","name":{"kind":"Name","value":"platform_id"}}]}}]}}]} as unknown as DocumentNode<ListAvailableRepositoriesQuery, ListAvailableRepositoriesQueryVariables>;
export const VerifySessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifySession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifySession"}}]}}]} as unknown as DocumentNode<VerifySessionMutation, VerifySessionMutationVariables>;
export const CreateGithubAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createGithubAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createGithubAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<CreateGithubAccountMutation, CreateGithubAccountMutationVariables>;
export const InstallationSetupSubscriptionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"installationSetupSubscription"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Platform"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installationSetup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InstallationSetupSubscriptionSubscription, InstallationSetupSubscriptionSubscriptionVariables>;
export const InstallationSetupQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"installationSetupQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"platform"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Platform"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installationSetup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"installation_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"installation_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"platform"},"value":{"kind":"Variable","name":{"kind":"Name","value":"platform"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InstallationSetupQueryQuery, InstallationSetupQueryQueryVariables>;
export const TrackedRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"trackedRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackedRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organizationId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TrackedRepositoriesQuery, TrackedRepositoriesQueryVariables>;
export const TrackRepositoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"trackRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trackRepository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<TrackRepositoryMutation, TrackRepositoryMutationVariables>;
export const UserAndAffiliationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userAndAffiliations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAndAffiliations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}},{"kind":"Field","name":{"kind":"Name","value":"installations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"platform"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]}}]} as unknown as DocumentNode<UserAndAffiliationsQuery, UserAndAffiliationsQueryVariables>;
export const VerifyAnonymousDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAnonymous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAnonymous"}}]}}]} as unknown as DocumentNode<VerifyAnonymousMutation, VerifyAnonymousMutationVariables>;