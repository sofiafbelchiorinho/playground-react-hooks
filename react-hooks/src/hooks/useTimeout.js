//from: https://github.com/WebDevSimplified/useful-custom-react-hooks/

import { useCallback, useEffect, useRef } from "react";

export default function useTimeout(callback, delay) {
  // first thing we do it memoizing our callback function
  // this 4 lines of code are the same as useCallback
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // second, we also create a ref for timeout so that
  // if our component re-renders for some reason,
  // we don't overwrite our current timeout
  const timeoutRef = useRef();

  // memoized setTimeout
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  // memoized clearTimeout
  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // if delay, set or clear change, clear and re-set the timeout
  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
