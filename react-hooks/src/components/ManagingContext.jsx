import React, { useContext, useState } from "react";
import { themes } from "../constants";

const ThemeContext = React.createContext({
  theme: null,
  setTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemedButton = ({ text, onClick }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      style={theme}
      onClick={() =>
        setTheme(theme === themes.dark ? themes.light : themes.dark)
      }
    >
      {text}
    </button>
  );
};

function ManagingContext() {
  return (
    <ThemeProvider>
      <ThemedButton text="button with static context" />
    </ThemeProvider>
  );
}

export default ManagingContext;
