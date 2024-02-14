/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n": types.LoginWithGithubDocument,
    "\n  mutation onboardWithGithub($name: String!, $code: String!) {\n    onboardWithGithub(name: $name, code: $code) {\n      id\n    }\n  }\n": types.OnboardWithGithubDocument,
    "\n  query listAvailableRepositories($userId: Int!, $sort: String, $page: String) {\n    listAvailableRepositories(userId: $userId, sort: $sort, page: $page) {\n      id\n      name\n      description\n      html_url\n      language\n      source\n    }\n  }\n": types.ListAvailableRepositoriesDocument,
    "\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      github {\n        id\n        token\n      }\n    }\n    organizations {\n      id\n      name\n      role\n    }\n  }\n": types.UserAndAffiliationsFragmentFragmentDoc,
    "\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n": types.VerifySessionDocument,
    "\n  mutation verifyAnonymous {\n    verifyAnonymous\n  }\n": types.VerifyAnonymousDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation onboardWithGithub($name: String!, $code: String!) {\n    onboardWithGithub(name: $name, code: $code) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation onboardWithGithub($name: String!, $code: String!) {\n    onboardWithGithub(name: $name, code: $code) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query listAvailableRepositories($userId: Int!, $sort: String, $page: String) {\n    listAvailableRepositories(userId: $userId, sort: $sort, page: $page) {\n      id\n      name\n      description\n      html_url\n      language\n      source\n    }\n  }\n"): (typeof documents)["\n  query listAvailableRepositories($userId: Int!, $sort: String, $page: String) {\n    listAvailableRepositories(userId: $userId, sort: $sort, page: $page) {\n      id\n      name\n      description\n      html_url\n      language\n      source\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      github {\n        id\n        token\n      }\n    }\n    organizations {\n      id\n      name\n      role\n    }\n  }\n"): (typeof documents)["\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      github {\n        id\n        token\n      }\n    }\n    organizations {\n      id\n      name\n      role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyAnonymous {\n    verifyAnonymous\n  }\n"): (typeof documents)["\n  mutation verifyAnonymous {\n    verifyAnonymous\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;