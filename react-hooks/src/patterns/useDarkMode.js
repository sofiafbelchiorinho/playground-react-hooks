import React from "react";

export default function useDarkMode(defaultValue) {
  const [isDarkMode, setIsDarkMode] = React.useState(defaultValue);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
