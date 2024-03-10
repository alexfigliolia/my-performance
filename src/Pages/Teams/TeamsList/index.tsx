import React, { memo, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AddButton } from "Components/AddButton";
import { PageContent } from "Components/Layouts";
import { SearchSection } from "Components/Layouts/SearchSection";
import { Modals } from "State/Modals";
import type { PropLess } from "Types/React";
import { List } from "./List";

export const TeamsList = memo(
  function TeamsList(_: PropLess) {
    const [params, setParams] = useSearchParams();
    const [search, setSearch] = useState(params.get("search") || "");

    const openAddTeam = useCallback(() => {
      Modals.newTeamToggle.open();
    }, []);

    const onChange = useCallback(
      (search: string) => {
        setSearch(search);
        if (search) {
          return setParams({ search });
        }
        return setParams(ps => {
          ps.delete("search");
          return ps;
        });
      },
      [setSearch, setParams],
    );

    return (
      <PageContent className="team-list">
        <SearchSection
          search={search}
          onChange={onChange}
          title="All Teams"
          subtitle="View any team within your organization">
          <AddButton aria-label="Add a team" onClick={openAddTeam} />
        </SearchSection>
        <List search={search} />
      </PageContent>
    );
  },
  () => true,
);
