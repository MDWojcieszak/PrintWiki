import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GetData } from "../services/GetData";

const PrintersSettings = (props) => {
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
      {props.userLogin ? (
        <NavLink to="/createPrinterSettings">
          <button className="btn btn-submit">Create Printer Settings</button>
        </NavLink>
      ) : null}
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
