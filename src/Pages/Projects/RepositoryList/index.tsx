import React, { memo, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageContent } from "Components/Layouts";
import { SearchSection } from "Components/Layouts/SearchSection";
import type { PropLess } from "Types/React";
import { List } from "./List";

export const RepositoryList = memo(
  function RepositoryList(_: PropLess) {
    const [params, setParams] = useSearchParams();
    const [search, setSearch] = useState(params.get("search") || "");

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
