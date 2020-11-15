import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Printer from "../components/printer/Printer";
import SelectMenu from "../components/selectMenu/SelectMenu";
import { GetData } from "../services/GetData";
import { PostData } from "../services/PostData";
import "../style/Printers.scss";

const Printers = () => {
  const [page, setPage] = useState(() => {
    return 1;
  });
  const [count, setCount] = useState([]);
  const [items, setItems] = useState([]);
  const [options, setOptions] = useState([]);
  const [brand, setBrand] = useState(0);
  useEffect(() => {
    var filter = { brand: brand ? options[brand] : "" };
    PostData("/printers", filter).then((data) => {
      setItems(data.printers);
      setCount(data.count);
    });
  }, [brand, page]);
  useEffect(() => {
    GetData("/printers/brands").then((data) => {
      var opt = ["All"];
      data.map((item) => {
        opt.push(item);
      });
      setOptions(opt);
    });
  }, []);
  return (
    <>
      <NavLink to="/createPrinter">
        <button className="btn btn-submit">Create Printer</button>
      </NavLink>

      <h1>Number of elements: {count}</h1>
      <div className="select-menu-component color-3">
        <SelectMenu
          options={options}
          value={setBrand}
          name="Select printer brand"
        ></SelectMenu>
      </div>

      {items.map((item) => {
        return (
          <Printer
            name={item.name}
            description={item.description}
            img_path={item.img_path}
          ></Printer>
        );
      })}
    </>
  );
};

export default Printers;
