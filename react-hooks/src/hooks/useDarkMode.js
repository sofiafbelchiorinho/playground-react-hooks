import React from "react";

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return {
    isDarkMode,
    toggleDarkMode,
  };
}
