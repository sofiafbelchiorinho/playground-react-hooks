import React from "react";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useDebouncedFetch(url, delay, options = {}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState();

  React.useEffect(() => {
    const debouncedFetch = setTimeout(() => {
      setLoading(true);
      fetch(url, { ...defaultOptions, ...options })
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, delay);

    return () => {
      clearTimeout(debouncedFetch);
    };
  }, [url]);

  return {
    loading,
    error,
    data,
  };
}
