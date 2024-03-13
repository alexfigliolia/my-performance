import React, { memo } from "react";
import { PageContent } from "Components/Layouts";
import { SearchSection } from "Components/Layouts/SearchSection";
import { useSearchURLState } from "Hooks/useSearchURLState";
import type { PropLess } from "Types/React";
import { List } from "./List";

export const RepositoryList = memo(
  function RepositoryList(_: PropLess) {
    const [search, onChange] = useSearchURLState();
    return (
      <PageContent className="repository-list">
        <SearchSection
          search={search}
          onChange={onChange}
          title="Available Projects"
          subtitle="Along with their tracked status"
        />
        <List search={search} />
      </PageContent>
    );
  },
  () => true,
);
