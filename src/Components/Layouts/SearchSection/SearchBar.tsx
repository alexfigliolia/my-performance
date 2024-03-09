import React, { memo, useCallback } from "react";
import { SearchBar as Search } from "Components/SearchBar";

export const SearchBar = memo(
  function SearchBar({ value, onChange, setActive }: Props) {
    const onFocus = useCallback(() => {
      setActive(true);
    }, [setActive]);

    const onBlur = useCallback(() => {
      if (!value) {
        setActive(false);
      }
    }, [value, setActive]);

    return (
      <Search
        collapsible
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
      />
    );
  },
  (pp, np) => pp.value === np.value,
);

interface Props {
  value: string;
  onChange: (value: string) => void;
  setActive: (active: boolean) => void;
}
