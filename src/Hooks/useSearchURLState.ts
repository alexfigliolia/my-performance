import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const useSearchURLState = (): [
  search: string,
  onChange: (search: string) => void,
] => {
  const [params] = useSearchParams();
  const [search, setSearch] = useState(params.get("search") || "");

  const onChange = useCallback(
    (search: string) => {
      setSearch(search);
      const { origin, pathname } = location;
      if (search) {
        return history.replaceState(
          {},
          document.title,
          origin + pathname + `?search=${search}`,
        );
      }
      history.replaceState({}, document.title, origin + pathname);
    },
    [setSearch],
  );
  return [search, onChange];
};
