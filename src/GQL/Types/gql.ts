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
    "\n  fragment TeamFragment on Team {\n    id\n    name\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n": types.TeamFragmentFragmentDoc,
    "\n  fragment MyTeamFragment on CurrentUsersTeam {\n    id\n    name\n    role {\n      role\n    }\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n": types.MyTeamFragmentFragmentDoc,
    "\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n": types.RepositoryFragmentFragmentDoc,
    "\n  fragment TeammateStats on OverallStatsPerUser {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n  }\n": types.TeammateStatsFragmentDoc,
    "\n  fragment TeammateProfileStats on TeammateCollaborator {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n    totalLines\n  }\n": types.TeammateProfileStatsFragmentDoc,
    "\n  fragment TeammateProfileFragment on TeammateProfile {\n    id\n    name\n    lines\n    commits\n    linesPerMonth\n    pullRequests {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n": types.TeammateProfileFragmentFragmentDoc,
    "\n  \n  fragment StatsPerUser on TeamStats {\n    id\n    name\n    lineTrend\n    totalLines\n    commitTrend\n    totalCommits\n    users {\n      ...TeammateStats\n    }\n    projects {\n      trend\n      trackedProjects {\n        id\n        name\n      }\n    }\n  }\n": types.StatsPerUserFragmentDoc,
    "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n": types.LoginWithGithubDocument,
    "\n  mutation VerifySession {\n    verifySession\n  }\n": types.VerifySessionDocument,
    "\n  \n  mutation addNewUserToTeam(\n    $name: String!\n    $email: String!\n    $role: UserRole!\n    $teamId: Int!\n    $organizationId: Int!\n  ) {\n    addNewUserToTeam(\n      name: $name\n      email: $email\n      role: $role\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      ...StatsPerUser\n    }\n  }\n": types.AddNewUserToTeamDocument,
    "\n  query countLinesAndCommits($organizationId: Int!) {\n    countLinesAndCommits(organizationId: $organizationId) {\n      lines\n      commits\n      totalProjects\n    }\n  }\n": types.CountLinesAndCommitsDocument,
    "\n  mutation createGithubAccount(\n    $code: String!\n    $installation_id: Int!\n    $name: String!\n  ) {\n    createGithubAccount(\n      code: $code\n      installation_id: $installation_id\n      name: $name\n    )\n  }\n": types.CreateGithubAccountDocument,
    "\n  subscription installationSetupStream(\n    $installation_id: Int!\n    $platform: Platform!\n  ) {\n    installationSetupStream(\n      installation_id: $installation_id\n      platform: $platform\n    ) {\n      id\n    }\n  }\n": types.InstallationSetupStreamDocument,
    "\n  query installationSetup($installation_id: Int!, $platform: Platform!) {\n    installationSetup(installation_id: $installation_id, platform: $platform) {\n      id\n    }\n  }\n": types.InstallationSetupDocument,
    "\n  \n  query overallStatsPerUser($teamId: Int!, $organizationId: Int!) {\n    overallStatsPerUser(teamId: $teamId, organizationId: $organizationId) {\n      ...StatsPerUser\n    }\n  }\n": types.OverallStatsPerUserDocument,
    "\n  \n  query availableRepositories(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositories(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n": types.AvailableRepositoriesDocument,
    "\n  \n  subscription availableRepositoriesStream(\n    $offset: Int\n    $limit: Int\n    $search: String\n    $organizationId: Int!\n    $sort: RepositorySortKeys\n  ) {\n    availableRepositoriesStream(\n      offset: $offset\n      limit: $limit\n      sort: $sort\n      search: $search\n      organizationId: $organizationId\n    ) {\n      ...RepositoryFragment\n    }\n  }\n": types.AvailableRepositoriesStreamDocument,
    "\n  query trackedRepositories($organizationId: Int!, $teamId: Int) {\n    trackedRepositories(organizationId: $organizationId, teamId: $teamId) {\n      id\n      name\n    }\n  }\n": types.TrackedRepositoriesDocument,
    "\n  mutation trackRepository(\n    $teamId: Int!\n    $repositoryId: Int!\n    $organizationId: Int!\n  ) {\n    trackRepository(\n      teamId: $teamId\n      repositoryId: $repositoryId\n      organizationId: $organizationId\n    ) {\n      id\n      name\n    }\n  }\n": types.TrackRepositoryDocument,
    "\n  query standouts($teamId: Int!, $organizationId: Int!) {\n    standouts(teamId: $teamId, organizationId: $organizationId) {\n      id\n      name\n      lines\n      increase\n    }\n  }\n": types.StandoutsDocument,
    "\n  query teamMesh($teamId: Int!, $organizationId: Int!) {\n    teamMesh(teamId: $teamId, organizationId: $organizationId) {\n      key\n      mesh\n    }\n  }\n": types.TeamMeshDocument,
    "\n  query teamPullRequests($page: Int, $teamId: Int!, $organizationId: Int!) {\n    teamPullRequests(\n      page: $page\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n": types.TeamPullRequestsDocument,
    "\n  \n  \n  query teammateProfile($organizationId: Int!, $userId: Int!) {\n    teammateProfile(organizationId: $organizationId, userId: $userId) {\n      ...TeammateProfileFragment\n      collaborators {\n        ...TeammateProfileStats\n      }\n    }\n  }\n": types.TeammateProfileDocument,
    "\n  \n  query teams(\n    $search: String\n    $offset: Int\n    $organizationId: Int!\n    $omitCurrentUser: Boolean\n  ) {\n    teams(\n      search: $search\n      offset: $offset\n      organizationId: $organizationId\n      omitCurrentUser: $omitCurrentUser\n    ) {\n      ...TeamFragment\n    }\n  }\n": types.TeamsDocument,
    "\n  \n  mutation createTeam($organizationId: Int!, $name: String!) {\n    createTeam(organizationId: $organizationId, name: $name) {\n      ...MyTeamFragment\n    }\n  }\n": types.CreateTeamDocument,
    "\n  \n  query myTeams($organizationId: Int!) {\n    myTeams(organizationId: $organizationId) {\n      ...MyTeamFragment\n    }\n  }\n": types.MyTeamsDocument,
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
export function gql(source: "\n  fragment TeamFragment on Team {\n    id\n    name\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment TeamFragment on Team {\n    id\n    name\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MyTeamFragment on CurrentUsersTeam {\n    id\n    name\n    role {\n      role\n    }\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment MyTeamFragment on CurrentUsersTeam {\n    id\n    name\n    role {\n      role\n    }\n    users {\n      id\n      name\n    }\n    projects {\n      repository {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n"): (typeof documents)["\n  fragment RepositoryFragment on Repository {\n    id\n    name\n    description\n    html_url\n    language\n    platform\n    api_url\n    platform_id\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TeammateStats on OverallStatsPerUser {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n  }\n"): (typeof documents)["\n  fragment TeammateStats on OverallStatsPerUser {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TeammateProfileStats on TeammateCollaborator {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n    totalLines\n  }\n"): (typeof documents)["\n  fragment TeammateProfileStats on TeammateCollaborator {\n    id\n    name\n    lines\n    commits\n    pullRequests\n    linesPerMonth\n    totalLines\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment TeammateProfileFragment on TeammateProfile {\n    id\n    name\n    lines\n    commits\n    linesPerMonth\n    pullRequests {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n"): (typeof documents)["\n  fragment TeammateProfileFragment on TeammateProfile {\n    id\n    name\n    lines\n    commits\n    linesPerMonth\n    pullRequests {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  fragment StatsPerUser on TeamStats {\n    id\n    name\n    lineTrend\n    totalLines\n    commitTrend\n    totalCommits\n    users {\n      ...TeammateStats\n    }\n    projects {\n      trend\n      trackedProjects {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  fragment StatsPerUser on TeamStats {\n    id\n    name\n    lineTrend\n    totalLines\n    commitTrend\n    totalCommits\n    users {\n      ...TeammateStats\n    }\n    projects {\n      trend\n      trackedProjects {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation loginWithGithub($code: String!) {\n    loginWithGithub(code: $code) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation VerifySession {\n    verifySession\n  }\n"): (typeof documents)["\n  mutation VerifySession {\n    verifySession\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  mutation addNewUserToTeam(\n    $name: String!\n    $email: String!\n    $role: UserRole!\n    $teamId: Int!\n    $organizationId: Int!\n  ) {\n    addNewUserToTeam(\n      name: $name\n      email: $email\n      role: $role\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      ...StatsPerUser\n    }\n  }\n"): (typeof documents)["\n  \n  mutation addNewUserToTeam(\n    $name: String!\n    $email: String!\n    $role: UserRole!\n    $teamId: Int!\n    $organizationId: Int!\n  ) {\n    addNewUserToTeam(\n      name: $name\n      email: $email\n      role: $role\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      ...StatsPerUser\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query countLinesAndCommits($organizationId: Int!) {\n    countLinesAndCommits(organizationId: $organizationId) {\n      lines\n      commits\n      totalProjects\n    }\n  }\n"): (typeof documents)["\n  query countLinesAndCommits($organizationId: Int!) {\n    countLinesAndCommits(organizationId: $organizationId) {\n      lines\n      commits\n      totalProjects\n    }\n  }\n"];
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
export function gql(source: "\n  \n  query overallStatsPerUser($teamId: Int!, $organizationId: Int!) {\n    overallStatsPerUser(teamId: $teamId, organizationId: $organizationId) {\n      ...StatsPerUser\n    }\n  }\n"): (typeof documents)["\n  \n  query overallStatsPerUser($teamId: Int!, $organizationId: Int!) {\n    overallStatsPerUser(teamId: $teamId, organizationId: $organizationId) {\n      ...StatsPerUser\n    }\n  }\n"];
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
export function gql(source: "\n  query trackedRepositories($organizationId: Int!, $teamId: Int) {\n    trackedRepositories(organizationId: $organizationId, teamId: $teamId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query trackedRepositories($organizationId: Int!, $teamId: Int) {\n    trackedRepositories(organizationId: $organizationId, teamId: $teamId) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation trackRepository(\n    $teamId: Int!\n    $repositoryId: Int!\n    $organizationId: Int!\n  ) {\n    trackRepository(\n      teamId: $teamId\n      repositoryId: $repositoryId\n      organizationId: $organizationId\n    ) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  mutation trackRepository(\n    $teamId: Int!\n    $repositoryId: Int!\n    $organizationId: Int!\n  ) {\n    trackRepository(\n      teamId: $teamId\n      repositoryId: $repositoryId\n      organizationId: $organizationId\n    ) {\n      id\n      name\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query standouts($teamId: Int!, $organizationId: Int!) {\n    standouts(teamId: $teamId, organizationId: $organizationId) {\n      id\n      name\n      lines\n      increase\n    }\n  }\n"): (typeof documents)["\n  query standouts($teamId: Int!, $organizationId: Int!) {\n    standouts(teamId: $teamId, organizationId: $organizationId) {\n      id\n      name\n      lines\n      increase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query teamMesh($teamId: Int!, $organizationId: Int!) {\n    teamMesh(teamId: $teamId, organizationId: $organizationId) {\n      key\n      mesh\n    }\n  }\n"): (typeof documents)["\n  query teamMesh($teamId: Int!, $organizationId: Int!) {\n    teamMesh(teamId: $teamId, organizationId: $organizationId) {\n      key\n      mesh\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query teamPullRequests($page: Int, $teamId: Int!, $organizationId: Int!) {\n    teamPullRequests(\n      page: $page\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n"): (typeof documents)["\n  query teamPullRequests($page: Int, $teamId: Int!, $organizationId: Int!) {\n    teamPullRequests(\n      page: $page\n      teamId: $teamId\n      organizationId: $organizationId\n    ) {\n      id\n      date\n      author\n      project\n      description\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  \n  query teammateProfile($organizationId: Int!, $userId: Int!) {\n    teammateProfile(organizationId: $organizationId, userId: $userId) {\n      ...TeammateProfileFragment\n      collaborators {\n        ...TeammateProfileStats\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  \n  query teammateProfile($organizationId: Int!, $userId: Int!) {\n    teammateProfile(organizationId: $organizationId, userId: $userId) {\n      ...TeammateProfileFragment\n      collaborators {\n        ...TeammateProfileStats\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query teams(\n    $search: String\n    $offset: Int\n    $organizationId: Int!\n    $omitCurrentUser: Boolean\n  ) {\n    teams(\n      search: $search\n      offset: $offset\n      organizationId: $organizationId\n      omitCurrentUser: $omitCurrentUser\n    ) {\n      ...TeamFragment\n    }\n  }\n"): (typeof documents)["\n  \n  query teams(\n    $search: String\n    $offset: Int\n    $organizationId: Int!\n    $omitCurrentUser: Boolean\n  ) {\n    teams(\n      search: $search\n      offset: $offset\n      organizationId: $organizationId\n      omitCurrentUser: $omitCurrentUser\n    ) {\n      ...TeamFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  mutation createTeam($organizationId: Int!, $name: String!) {\n    createTeam(organizationId: $organizationId, name: $name) {\n      ...MyTeamFragment\n    }\n  }\n"): (typeof documents)["\n  \n  mutation createTeam($organizationId: Int!, $name: String!) {\n    createTeam(organizationId: $organizationId, name: $name) {\n      ...MyTeamFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query myTeams($organizationId: Int!) {\n    myTeams(organizationId: $organizationId) {\n      ...MyTeamFragment\n    }\n  }\n"): (typeof documents)["\n  \n  query myTeams($organizationId: Int!) {\n    myTeams(organizationId: $organizationId) {\n      ...MyTeamFragment\n    }\n  }\n"];
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