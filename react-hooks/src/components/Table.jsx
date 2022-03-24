import React from "react";
import useTable from "../patterns/useTable";
import useFetch from "../patterns/useFetch";

const Table = () => {
  const { loading, error, data, refetch } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );

  const { columns, rows } = useTable(data?.results);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          {columns.map((column) => (
            <th style={{ textAlign: "left" }}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr>
            {columns.map((column) => (
              <td style={{ padding: 5 }}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
