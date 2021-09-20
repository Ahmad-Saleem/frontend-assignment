import React, { useMemo, useState } from "react";

export const SearchContext = React.createContext({
  search: "",
  setSearch: () => {},
});

export const SearchProvider = (props) => {
  const [search, setSearch] = useState("");

  const value = useMemo(() => ({ search, setSearch }), [search]);

  return (
    <SearchContext.Provider value={value}>
      {props.children}
    </SearchContext.Provider>
  );
};
