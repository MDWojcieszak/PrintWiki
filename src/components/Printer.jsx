import React from "react";
import "../style/Printer.scss";

const Printer = (props) => {
    return ( 
    <div className="printer">
        <img className="image" src={require("../img/printers/"+props.image_path+".jpg")}></img>
        <div className="text">
            <h1 className="name">{props.name}</h1>
            <p className="description">{props.description}</p>
        </div>
    </div> );
}
 
export default Printer;