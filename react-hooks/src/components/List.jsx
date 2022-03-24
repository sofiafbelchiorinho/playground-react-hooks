import React from "react";
import useFetch from "../patterns/useFetch";

export default function List() {
  const {
    loading,
    error,
    data: characters,
    refetch,
  } = useFetch("https://rickandmortyapi.com/api/character");

  if (loading) {
    return "Loading...";
  }
  if (error) {
    console.log(`Error: ${error}`);
  }

  return (
    <div>
      <div>
        {characters?.results?.slice(0, 10).map((r) => (
          <p key={`character-${r.name}`}>{r.name}</p>
        ))}
      </div>
      <button onClick={refetch}> refetch</button>
    </div>
  );
}
