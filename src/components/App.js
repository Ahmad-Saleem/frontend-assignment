import { SearchProvider } from "../context/SearchContext";
import Header from "./Header";

import Movies from "./Movies";

import "../styles/main.scss";
import { ModalProvider } from "../context/ModalContext";

const App = () => {
  return (
    <SearchProvider>
      <ModalProvider>
        <Header />
        <Movies />
      </ModalProvider>
    </SearchProvider>
  );
};

export default App;
