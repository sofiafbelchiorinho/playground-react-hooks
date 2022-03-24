import { useEffect, useState } from "react";

export default function useTable(data) {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);

  const flattenObject = (obj, parentKey = "") => {
    const flatRow = Object.keys(obj).reduce((flatObj, currKey) => {
      const value = obj[currKey];

      if (typeof value === "object" && Array.isArray(value)) {
        flatObj = {
          ...flatObj,
          [parentKey + currKey]: value.join("\n"),
        };
      }

      if (typeof value === "object" && !Array.isArray(value)) {
        Object.assign(flatObj, flattenObject(value, `${currKey}_`));
      } else {
        flatObj = {
          ...flatObj,
          [parentKey + currKey]: value,
        };
      }
      return flatObj;
    }, {});

    return flatRow;
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const flattenedRows = data.map((row) => flattenObject(row));
      setRows(flattenedRows);
      setColumns(
        Object.keys(flattenedRows[0]).map((key) => ({
          id: key,
          label: key.toUpperCase(),
        }))
      );
    }
  }, [data]);

  return {
    columns,
    rows,
  };
}
