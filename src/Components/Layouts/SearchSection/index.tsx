import React, { memo, useCallback, useState } from "react";
import { SectionDescription } from "Components/SectionDescription";
import type { OptionalChildren } from "Types/React";
import { SearchBar } from "./SearchBar";
import "./styles.scss";

export const SearchSection = memo(
  function SearchSection({
    title,
    search,
    subtitle,
    children,
    onChange,
  }: Props) {
    const [searching, setSearching] = useState(!!search);

    const setActive = useCallback((active: boolean) => {
      setSearching(active);
    }, []);

    return (
      <div className={`search-section ${searching ? "searching" : ""}`}>
        <SectionDescription title={title} subtitle={subtitle} />
        <div className="actions">
          {children}
          <SearchBar value={search} onChange={onChange} setActive={setActive} />
        </div>
      </div>
    );
  },
  (pp, np) => pp.search === np.search,
);

interface Props extends OptionalChildren {
  search: string;
  title: string;
  subtitle: string;
  onChange: (value: string) => void;
}
