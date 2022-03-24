import React, { useContext } from "react";
import { themes } from "../constants";

const ThemeContext = React.createContext();

const Theme = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const ThemedButton = ({ text, onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <button style={theme} onClick={onClick}>
      {text}
    </button>
  );
};

function UsingContext() {
  return (
    <Theme theme={themes.dark}>
      <ThemedButton text="button with static context" />
    </Theme>
  );
}

export default UsingContext;
