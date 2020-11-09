import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Printer from "../components/Printer";
import SelectMenu from "../components/selectMenu/SelectMenu";
import { GetData } from "../services/GetData";

const Printers = () => {
  const [page, setPage] = useState(() => {
    return 1;
  });
  const [count, setCount] = useState([]);
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState(["Prusa", "Creality"]);
  useEffect(() => {
    GetData("/printers").then((data) => {
      setItems(data.printers);
      setCount(data.count);
    });
  }, [page]);
  return (
    <>
      <NavLink to="/createPrinter">
        <button className="btn btn-submit">Create Printer</button>
      </NavLink>

      <h1>Number of elements: {count}</h1>
      <SelectMenu options={options}></SelectMenu>
      {items.map((item) => {
        return (
          <Printer
            name={item.name}
            description={item.description}
            image_path="Prusa_i3_MK3S"
          ></Printer>
        );
      })}
    </>
  );
};

export default Printers;
