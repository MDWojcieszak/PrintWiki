import React, { useEffect, useState } from "react";
import { GetData } from "../services/GetData";
import Comment from "../components/comment/Comment";
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
        <>
          <div className="printer-container">
            <div className="horizontal">
              <img
                className="printer_photo"
                src={"http://localhost:3000" + printer.img_path}
              />
              <div className="vertical">
                <h1 className="Pname">{printer.name}</h1>
                <h2 className="Pbrand">{printer.brand}</h2>
              </div>
              <div className="vertical card-p">
                <h2>{"Type: " + printer.type}</h2>
                <p>{"Max X: " + printer.coordinates.maxX}</p>
                <p>{"Max Y: " + printer.coordinates.maxY}</p>
                <p>{"Max Z: " + printer.coordinates.maxZ}</p>
              </div>
            </div>
            <div className="horizontal">
              <div className="vertical">
                <p>{printer.description}</p>
              </div>
              <div className="settings-container">
                <p>Best settings:</p>
              </div>
            </div>

            {/* <h1>Coordinates:</h1> */}
            {/* {printer.coordinates.map(() => {
            return <h1>xD</h1>;
          })} */}
            <div className="comment-tag">Comments section</div>
            <div className="vertical">
              <Comment
                user="Paul"
                user_img="paul.jpg"
                content="this is a comment xD"
                date="11.12"
              />
              <Comment
                user="Tomas"
                user_img="tomas.jpg"
                content="this is a comment xD"
                date="11.12"
              />
            </div>
          </div>
        </>
      ) : (
        <h1>Loading data...</h1>
      )}
    </>
  );
};

export default Printer;
