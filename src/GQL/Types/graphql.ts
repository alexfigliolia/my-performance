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

export type BaseOrganizationAndUserRole = {
  __typename?: 'BaseOrganizationAndUserRole';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  role: UserRole;
};

export type BaseOrganizationType = {
  __typename?: 'BaseOrganizationType';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GithubRepository = {
  __typename?: 'GithubRepository';
  clone_url: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  html_url: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  source: Scalars['String']['output'];
};

export type GithubUser = {
  __typename?: 'GithubUser';
  id: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createOrganization: BaseOrganizationType;
  logout: Scalars['Boolean']['output'];
  onboardWithGithub: User;
  verifyAnonymous: Scalars['Boolean']['output'];
  verifySession: UserAndAffiliations;
};


export type MutationCreateOrganizationArgs = {
  name: Scalars['String']['input'];
  ownerID: Scalars['Int']['input'];
};


export type MutationOnboardWithGithubArgs = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  listAvailableRepositories: Array<GithubRepository>;
};


export type QueryListAvailableRepositoriesArgs = {
  page?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  github?: Maybe<GithubUser>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type UserAndAffiliations = {
  __typename?: 'UserAndAffiliations';
  organizations: Array<BaseOrganizationAndUserRole>;
  user: User;
};

export enum UserRole {
  Admin = 'admin',
  Engineer = 'engineer',
  Viewer = 'viewer'
}

export type OnboardWithGithubMutationVariables = Exact<{
  name: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type OnboardWithGithubMutation = { __typename?: 'Mutation', onboardWithGithub: { __typename?: 'User', id: number } };

export type ListAvailableRepositoriesQueryVariables = Exact<{
  userId: Scalars['Int']['input'];
  sort?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListAvailableRepositoriesQuery = { __typename?: 'Query', listAvailableRepositories: Array<{ __typename?: 'GithubRepository', id: number, name: string, description?: string | null, html_url: string, language?: string | null, source: string }> };

export type UserAndAffiliationsFragmentFragment = { __typename?: 'UserAndAffiliations', user: { __typename?: 'User', id: number, name: string, email: string, verified: boolean, github?: { __typename?: 'GithubUser', id: number, token: string } | null }, organizations: Array<{ __typename?: 'BaseOrganizationAndUserRole', id: number, name: string, role: UserRole }> };

export type VerifySessionMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifySessionMutation = { __typename?: 'Mutation', verifySession: { __typename?: 'UserAndAffiliations', user: { __typename?: 'User', id: number, name: string, email: string, verified: boolean, github?: { __typename?: 'GithubUser', id: number, token: string } | null }, organizations: Array<{ __typename?: 'BaseOrganizationAndUserRole', id: number, name: string, role: UserRole }> } };

export type VerifyAnonymousMutationVariables = Exact<{ [key: string]: never; }>;


export type VerifyAnonymousMutation = { __typename?: 'Mutation', verifyAnonymous: boolean };

export const UserAndAffiliationsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAndAffiliationsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAndAffiliations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UserAndAffiliationsFragmentFragment, unknown>;
export const OnboardWithGithubDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"onboardWithGithub"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"onboardWithGithub"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<OnboardWithGithubMutation, OnboardWithGithubMutationVariables>;
export const ListAvailableRepositoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listAvailableRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAvailableRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"html_url"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"source"}}]}}]}}]} as unknown as DocumentNode<ListAvailableRepositoriesQuery, ListAvailableRepositoriesQueryVariables>;
export const VerifySessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifySession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifySession"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAndAffiliationsFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAndAffiliationsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAndAffiliations"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"github"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<VerifySessionMutation, VerifySessionMutationVariables>;
export const VerifyAnonymousDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyAnonymous"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyAnonymous"}}]}}]} as unknown as DocumentNode<VerifyAnonymousMutation, VerifyAnonymousMutationVariables>;