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
    "\n  \n  mutation onBoard(\n    $username: String!\n    $email: String!\n    $password: String!\n    $organizationName: String!\n    $platform: Platform!\n  ) {\n    onboard(\n      username: $username\n      email: $email\n      password: $password\n      platform: $platform\n      organizationName: $organizationName\n    ) {\n      ...UserAndAffiliationsFragment\n    }\n  }\n": types.OnBoardDocument,
    "\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      email\n      verified\n    }\n    organizations {\n      id\n      name\n      platform\n      role\n    }\n  }\n": types.UserAndAffiliationsFragmentFragmentDoc,
    "\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n": types.VerifySessionDocument,
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
export function gql(source: "\n  \n  mutation onBoard(\n    $username: String!\n    $email: String!\n    $password: String!\n    $organizationName: String!\n    $platform: Platform!\n  ) {\n    onboard(\n      username: $username\n      email: $email\n      password: $password\n      platform: $platform\n      organizationName: $organizationName\n    ) {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation onBoard(\n    $username: String!\n    $email: String!\n    $password: String!\n    $organizationName: String!\n    $platform: Platform!\n  ) {\n    onboard(\n      username: $username\n      email: $email\n      password: $password\n      platform: $platform\n      organizationName: $organizationName\n    ) {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      email\n      verified\n    }\n    organizations {\n      id\n      name\n      platform\n      role\n    }\n  }\n"): (typeof documents)["\n  fragment UserAndAffiliationsFragment on UserAndAffiliations {\n    user {\n      id\n      name\n      email\n      verified\n    }\n    organizations {\n      id\n      name\n      platform\n      role\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation VerifySession {\n    verifySession {\n      ...UserAndAffiliationsFragment\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;