import React, { useEffect } from "react";
import Filters from "./components/Filters";
import List from "./components/List";
import useDarkMode from "./hooks/useDarkMode";

const theme = {
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
};

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const styles = React.useMemo(
    () => (isDarkMode ? theme.dark : theme.light),
    [isDarkMode]
  );

  useEffect(() => {
    console.log("changed");
  }, [styles]);

  return (
    <div style={styles}>
      <button onClick={toggleDarkMode}>change theme</button>
      <Filters />
      <List />
    </div>
  );
}

export default App;
