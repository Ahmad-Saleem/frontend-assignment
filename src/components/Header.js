import logo from "../logo.svg";
import Search from "./Search";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Timescale" />
      <Search />
    </header>
  );
}
