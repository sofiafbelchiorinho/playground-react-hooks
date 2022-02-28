//from: https://github.com/WebDevSimplified/useful-custom-react-hooks/

import React from "react";
import useTimeout from "../hooks/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);

  React.useEffect(() => {
    reset();
  }, [...dependencies, reset]);

  React.useEffect(() => {
    clear();
  }, []);
}
