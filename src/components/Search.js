import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Search() {
  const { setSearch } = useContext(SearchContext);
  const [text, setText] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => setSearch(text), 1000);
    return () => clearTimeout(delay);
  }, [text, setSearch]);

  return (
    <input
      type="text"
      name="search"
      value={text}
      onChange={({ target }) => setText(target.value)}
    />
  );
}
