import { useRef } from "react";

export const UseDebounce = (fn, delay = 500) => {
  const timeoutRef = useRef(null);

  const debounceFn = (...params) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...params);
    }, delay);
  };

  return debounceFn;
};
