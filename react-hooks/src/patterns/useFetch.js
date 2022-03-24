import React from "react";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useFetch(url, options = {}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [data, setData] = React.useState();

  React.useEffect(() => {
    refetch();
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetch(url, { ...defaultOptions, ...options })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    loading,
    error,
    data,
    refetch,
  };
}
