import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import SearchIcon from "../images/search-icon.svg";
import { SearchBox } from "../styled/Input";

export default function Search() {
  const { setSearch } = useContext(SearchContext);
  const [text, setText] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => setSearch(text), 1000);
    return () => clearTimeout(delay);
  }, [text, setSearch]);

  return (
    <SearchBox className="header__search">
      <img src={SearchIcon} alt="Search Icon" />
      <input
        type="text"
        name="search"
        value={text}
        onChange={({ target }) => setText(target.value)}
        placeholder="Search for a movie"
      />
    </SearchBox>
  );
}
