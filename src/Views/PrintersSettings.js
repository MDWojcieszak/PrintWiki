import React, { useState, useEffect } from "react";
import { GetData } from "../services/GetData";

const PrintersSettings = () => {
  const [page, setPage] = useState(() => {
    return 1;
  });
  const [count, setCount] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    GetData("/printersSettings").then((data) => {
      setItems(data.printersSettings);
      setCount(data.count);
    });
  }, [page]);
  return (
    <>
      <h1>Number of elements: {count}</h1>
      {items.map((item) => {
        return (
          <h1>
            {item.name} {item.forPrinter.printerName}
          </h1>
        );
      })}
    </>
  );
};

export default PrintersSettings;
