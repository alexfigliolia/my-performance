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
    "\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n": types.RepositoryFragmentFragmentDoc,
    "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n": types.LoginWithGithubDocument,
    "\n  \n  query availableRepositories(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositories(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n": types.AvailableRepositoriesDocument,
    "\n  \n  subscription availableRepositoriesStream(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositoriesStream(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n": types.AvailableRepositoriesStreamDocument,
    "\n  mutation VerifySession {\n    verifySession\n  }\n": types.VerifySessionDocument,
    "\n  mutation createGithubAccount(\n    $code: String!\n    $installation_id: Int!\n    $name: String!\n  ) {\n    createGithubAccount(\n      code: $code\n      installation_id: $installation_id\n      name: $name\n    )\n  }\n": types.CreateGithubAccountDocument,
    "\n  subscription installationSetupStream(\n    $installation_id: Int!\n    $platform: Platform!\n  ) {\n    installationSetupStream(\n      installation_id: $installation_id\n      platform: $platform\n    ) {\n      id\n    }\n  }\n": types.InstallationSetupStreamDocument,
    "\n  query installationSetup($installation_id: Int!, $platform: Platform!) {\n    installationSetup(installation_id: $installation_id, platform: $platform) {\n      id\n    }\n  }\n": types.InstallationSetupDocument,
    "\n  query overallStatsPerUser($organizationId: Int!) {\n    overallStatsPerUser(organizationId: $organizationId) {\n      id\n      name\n      lines\n      commits\n    }\n  }\n": types.OverallStatsPerUserDocument,
    "\n  query trackedRepositories($organizationId: Int!) {\n    trackedRepositories(organizationId: $organizationId) {\n      id\n      name\n    }\n  }\n": types.TrackedRepositoriesDocument,
    "\n  mutation trackRepository($id: Int!) {\n    trackRepository(id: $id) {\n      id\n      name\n    }\n  }\n": types.TrackRepositoryDocument,
    "\n  query userAndAffiliations {\n    userAndAffiliations {\n      id\n      name\n      organizations {\n        name\n        id\n        roles {\n          role\n        }\n        installations {\n          id\n          type\n          platform\n        }\n      }\n      github {\n        token\n      }\n    }\n  }\n": types.UserAndAffiliationsDocument,
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
export function gql(source: "\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n"): (typeof documents)["\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query availableRepositories(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositories(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n"): (typeof documents)["\n  \n  query availableRepositories(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositories(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  subscription availableRepositoriesStream(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositoriesStream(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n"): (typeof documents)["\n  \n  subscription availableRepositoriesStream(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositoriesStream(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifySession {\n    verifySession\n  }\n"): (typeof documents)["\n  mutation VerifySession {\n    verifySession\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createGithubAccount(\n    $code: String!\n    $installation_id: Int!\n    $name: String!\n  ) {\n    createGithubAccount(\n      code: $code\n      installation_id: $installation_id\n      name: $name\n    )\n  }\n"): (typeof documents)["\n  mutation createGithubAccount(\n    $code: String!\n    $installation_id: Int!\n    $name: String!\n  ) {\n    createGithubAccount(\n      code: $code\n      installation_id: $installation_id\n      name: $name\n    )\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription installationSetupStream(\n    $installation_id: Int!\n    $platform: Platform!\n  ) {\n    installationSetupStream(\n      installation_id: $installation_id\n      platform: $platform\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  subscription installationSetupStream(\n    $installation_id: Int!\n    $platform: Platform!\n  ) {\n    installationSetupStream(\n      installation_id: $installation_id\n      platform: $platform\n    ) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query installationSetup($installation_id: Int!, $platform: Platform!) {\n    installationSetup(installation_id: $installation_id, platform: $platform) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query installationSetup($installation_id: Int!, $platform: Platform!) {\n    installationSetup(installation_id: $installation_id, platform: $platform) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query overallStatsPerUser($organizationId: Int!) {\n    overallStatsPerUser(organizationId: $organizationId) {\n      id\n      name\n      lines\n      commits\n    }\n  }\n"): (typeof documents)["\n  query overallStatsPerUser($organizationId: Int!) {\n    overallStatsPerUser(organizationId: $organizationId) {\n      id\n      name\n      lines\n      commits\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query trackedRepositories($organizationId: Int!) {\n    trackedRepositories(organizationId: $organizationId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query trackedRepositories($organizationId: Int!) {\n    trackedRepositories(organizationId: $organizationId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation trackRepository($id: Int!) {\n    trackRepository(id: $id) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation trackRepository($id: Int!) {\n    trackRepository(id: $id) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query userAndAffiliations {\n    userAndAffiliations {\n      id\n      name\n      organizations {\n        name\n        id\n        roles {\n          role\n        }\n        installations {\n          id\n          type\n          platform\n        }\n      }\n      github {\n        token\n      }\n    }\n  }\n"): (typeof documents)["\n  query userAndAffiliations {\n    userAndAffiliations {\n      id\n      name\n      organizations {\n        name\n        id\n        roles {\n          role\n        }\n        installations {\n          id\n          type\n          platform\n        }\n      }\n      github {\n        token\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation verifyAnonymous {\n    verifyAnonymous\n  }\n"): (typeof documents)["\n  mutation verifyAnonymous {\n    verifyAnonymous\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;