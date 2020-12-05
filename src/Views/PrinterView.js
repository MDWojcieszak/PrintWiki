import React, { useEffect, useState } from "react";
import { GetData } from "../services/GetData";
import "../style/Printer.scss";
const Printer = (props) => {
  const [printer, setPrinter] = useState();
  useEffect(() => {
    console.log(props.match.params.id);
    GetData("/printers/" + props.match.params.id).then((data) => {
      setPrinter(data);
    });
  }, []);
  useEffect(() => {
    console.log(printer);
  }, [printer]);
  return (
    <>
      {printer ? (
        <div className="printer-container">
          <img src={"http://localhost:3000" + printer.img_path} />
          <h1>{printer.name}</h1>
          <h2>{printer.brand}</h2>
          <p>{printer.description}</p>
          {/* <h1>Coordinates:</h1> */}
          {/* {printer.coordinates.map(() => {
            return <h1>xD</h1>;
          })} */}
        </div>
      ) : (
        <h1>Loading data...</h1>
      )}
    </>
  );
};

export default Printer;
