import { SearchProvider } from "../context/SearchContext";
import Header from "./Header";

import Movies from "./Movies";

import "../styles/main.scss";

const App = () => {
  return (
    <SearchProvider>
      <Header />
      <Movies />
    </SearchProvider>
  );
};

export default App;
