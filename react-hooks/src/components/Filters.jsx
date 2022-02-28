import React from "react";
import useDebouncedFetch from "../hooks/useDebouncedFetch";

export default function Filters() {
  const [searchterm, setSearchterm] = React.useState("");

  const { data: options, loading } = useDebouncedFetch(
    `https://rickandmortyapi.com/api/character/?name=${searchterm}`,
    1000,
    {}
  );

  const onSearch = React.useCallback((e) => {
    setSearchterm(e.target.value);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <strong>Filter</strong>
      <input value={searchterm} onChange={onSearch} />
      <select>
        {options?.results?.slice(0, 10).map((r, i) => (
          <option key={`option-${r.name}-${i}`} value={r.name}>
            {r.name}
          </option>
        ))}
      </select>
      {loading && "..."}
    </div>
  );
}
