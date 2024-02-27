import React, { memo, useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PageContent } from "Components/Layouts";
import type { PropLess } from "Types/React";
import { List } from "./List";
import { SectionTitle } from "./SectionTitle";

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
        <SectionTitle search={search} onChange={onChange} />
        <List search={search} />
      </PageContent>
    );
  },
  () => true,
);
