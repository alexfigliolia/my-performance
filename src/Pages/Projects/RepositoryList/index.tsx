import React, { memo, useCallback, useState } from "react";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";

export const RepositoryList = memo(
  function RepositoryList(_: PropLess) {
    const [search, setSearch] = useState("");

    const onChange = useCallback(
      (search: string) => {
        setSearch(search);
      },
      [setSearch],
    );

    return (
      <PageContent className="repository-list">
        <SectionTitle search={search} onChange={onChange} />
        <List search={search} />
      </PageContent>
    );
  },
  () => true,
);
