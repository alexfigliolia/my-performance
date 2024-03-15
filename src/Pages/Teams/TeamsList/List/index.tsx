import React, { memo, useCallback } from "react";
import { InfiniteScrollList } from "Components/Layouts/InfiniteScrollList";
import type { Props as ITeam } from "Components/Team";
import { Skeleton, Team } from "Components/Team";
import type { TeamsQuery, TeamsQueryVariables } from "GQL";
import { GQLServiceClient, teams } from "GQL";
import { Organizations } from "State/Organizations";
import { NoOrgTeams } from "./NoOrgTeams";

export const List = memo(
  function List({ search }: Props) {
    const queryNextPage = useCallback(
      async (page = 1) => {
        const Client = new GQLServiceClient<TeamsQuery, TeamsQueryVariables>({
          query: teams,
          variables: {
            search,
            omitCurrentUser: true,
            offset: (page - 1) * 30,
            organizationId: Organizations.getState().current,
          },
        });
        const result = await Client.request();
        return result.data.teams;
      },
      [search],
    );

    const renderItem = useCallback((team: ITeam) => {
      return <Team {...team} />;
    }, []);

    return (
      <InfiniteScrollList
        search={search}
        skeletonNode={Skeleton}
        renderItem={renderItem}
        queryNextPage={queryNextPage}
        fallbackNode={<NoOrgTeams />}
      />
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props {
  search: string;
}
