import React, { memo, useCallback } from "react";
import { AddButton } from "Components/AddButton";
import { PageContent } from "Components/Layouts";
import { SearchSection } from "Components/Layouts/SearchSection";
import { useSearchURLState } from "Hooks/useSearchURLState";
import { Modals } from "State/Modals";
import type { PropLess } from "Types/React";
import { List } from "./List";

export const TeamsList = memo(
  function TeamsList(_: PropLess) {
    const [search, onChange] = useSearchURLState();

    const openAddTeam = useCallback(() => {
      Modals.newTeamToggle.open();
    }, []);

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
