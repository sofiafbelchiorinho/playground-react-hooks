import React from "react";
import useDebounce from "../hooks/useDebounce";

export default function Filters() {
  const autocompleteRef = React.useRef();
  const [searchterm, setSearchterm] = React.useState("");
  const [data, setData] = React.useState();

  useDebounce(
    () => {
      fetch(`https://rickandmortyapi.com/api/character/?name=${searchterm}`)
        .then((r) => r.json())
        .then((res) => {
          autocompleteRef.current.disabled = false;
          setData(res);
        });
    },
    1000,
    [searchterm]
  );

  const onSearch = React.useCallback((e) => {
    // user starts typing
    setSearchterm(e.target.value);
    // select gets disabled while typing
    autocompleteRef.current.disabled = true;
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <strong>Filter</strong>
      <input value={searchterm} onChange={onSearch} />
      <select ref={autocompleteRef}>
        {data?.results?.slice(0, 10).map((r) => (
          <option key={r.name} value={r.name}>
            {r.name}
          </option>
        ))}
      </select>
    </div>
  );
}
