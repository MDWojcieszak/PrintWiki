import React, { useEffect, useState } from "react";
import InputField from "../components/inputField/InputField";
import SelectMenu from "../components/selectMenu/SelectMenu";
import UploadForm from "../components/uploadForm/UploadForm";
import { GetData } from "../services/GetData";
import "../style/CreatePrinterSettings.scss";
const CreatePrinterSettings = () => {
  const [settingsName, setSettingsName] = useState("");
  const [printers, setPrinters] = useState([]);
  const [choosenPrinter, setCP] = useState(0);

  const [brands, setBrands] = useState([]);
  const [choosenBrand, setCB] = useState(0);

  useEffect(() => {
    GetData("/printers/brands").then((data) => {
      setBrands(data);
    });
  }, []);
  useEffect(() => {
    GetData("/printers/brands/" + brands[choosenBrand]).then((data) => {
      var temp = [];
      data.printers.map((printer) => {
        temp.push(printer.name);
      });
      setPrinters(temp);
    });
  }, [choosenBrand, brands]);
  return (
    <>
      <div className="cps-component ">
        <div className="main-info color-1">
          <UploadForm></UploadForm>
          <InputField
            name="printerSettingsName"
            text="Printer settings name"
            value={setSettingsName}
          ></InputField>
          <SelectMenu
            options={brands}
            value={setCB}
            name="Choose brand"
          ></SelectMenu>
          <SelectMenu
            options={printers}
            value={setCP}
            name="Choose printer"
          ></SelectMenu>
        </div>
        <div className="category color-2">
          <p className="category-name">Max Feedrates</p>
          <InputField
            name="maxX"
            text="Max X"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxY"
            text="MaxY"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxZ"
            text="Max Z"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxE"
            text="Max E"
            value={setSettingsName}
          ></InputField>
        </div>
        <div className="category color-3">
          <p className="category-name">Max Accelerations</p>
          <InputField
            name="maxX"
            text="Max X"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxY"
            text="MaxY"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxZ"
            text="Max Z"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxE"
            text="Max E"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxEE"
            text="Max when extracting"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxRE"
            text="Max when retracting"
            value={setSettingsName}
          ></InputField>
        </div>
        <div className="category color-2">
          <p className="category-name">Jerk Limit's</p>
          <InputField
            name="maxX"
            text="Max X"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxY"
            text="MaxY"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxZ"
            text="Max Z"
            value={setSettingsName}
          ></InputField>
          <InputField
            name="maxE"
            text="Max E"
            value={setSettingsName}
          ></InputField>
        </div>
      </div>
    </>
  );
};

export default CreatePrinterSettings;
