import React, { memo, useCallback } from "react";
import { AddButton } from "Components/AddButton";
import { PageContent } from "Components/Layouts";
import { SearchSection } from "Components/Layouts/SearchSection";
import { Modals } from "State/Modals";
import { Team, useTeam } from "State/Team";
import type { PropLess } from "Types/React";
import { List } from "./List";

export const TeammateList = memo(
  function TeammateList(_: PropLess) {
    const search = useTeam(state => state.search);

    const onChange = useCallback((value: string) => {
      Team.search(value);
    }, []);

    const openAddTeammate = useCallback(() => {
      Modals.createUserToggle.open();
    }, []);

    return (
      <PageContent className="teammate-list">
        <SearchSection
          search={search}
          onChange={onChange}
          title="Teammates"
          subtitle="Along with their recent stats">
          <AddButton aria-label="Add a teammate" onClick={openAddTeammate} />
        </SearchSection>
        <List />
      </PageContent>
    );
  },
  () => true,
);
