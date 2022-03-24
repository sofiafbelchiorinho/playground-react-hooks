import React, { useEffect } from "react";
import Autocomplete from "./components/Autocomplete";
import Filters from "./components/Filters";
import { Flatten } from "./components/Flatten";
import List from "./components/List";
import ManagingContext from "./components/ManagingContext";
import UsingContext from "./components/UsingContext";
import PageLoading from "./components/PageLoading";
import Table from "./components/Table";
import useDarkMode from "./patterns/useDarkMode";
import { themes } from "./constants";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode(false);

  const styles = React.useMemo(
    () => (isDarkMode ? themes.dark : themes.light),
    [isDarkMode]
  );

  return (
    <div style={styles}>
      <button onClick={toggleDarkMode}>change theme</button>
      {/*       
      <Filters />
      <List />
      <Flatten />
      <UsingContext />
      <ManagingContext />
      <PageLoading />
      <Table />
      <Autocomplete /> 
      */}
    </div>
  );
}

export default App;
