import React from "react";
import useFetch from "../hooks/useFetch";

export default function List() {
  const { loading, error, data, refetch } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  if (loading) {
    return "Loading...";
  }
  if (error) {
    console.log(`Error: ${error}`);
  }

  return (
    <div>
      <div>
        {data?.results?.slice(0, 10).map((r) => (
          <p key={r.name}>{r.name}</p>
        ))}
      </div>
      <button onClick={refetch}> refetch</button>
    </div>
  );
}
