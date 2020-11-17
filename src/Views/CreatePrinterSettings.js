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
  const [printerInfo, setPrinterInfo] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  const [brands, setBrands] = useState([]);
  const [choosenBrand, setCB] = useState(0);
  const [extruders, setExtruders] = useState([]);
  const [currentExtruder, setCurrentExtruder] = useState(1);
  const [applyToAll, setApplyToAll] = useState(false);

  useEffect(() => {
    GetData("/printers/brands").then((data) => {
      setBrands(data);
    });
  }, []);
  useEffect(() => {
    GetData("/printers/brands/" + brands[choosenBrand]).then((data) => {
      var temp = [];
      var info = [];
      data.printers.map((printer) => {
        temp.push(printer.name);
      });
      setPrinters(temp);
      setPrinterInfo(data.printers);
    });
  }, [choosenBrand, brands]);

  useEffect(() => {
    console.log(applyToAll);
  }, [applyToAll]);
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
        <div className="cards">
          <p
            id="0"
            onClick={(e) =>
              currentCard == 0 ? null : setCurrentCard(e.target.id)
            }
            className={currentCard == 0 ? "card-choosen" : "card"}
          >
            Max Feedrates
          </p>
          <p
            id="1"
            onClick={(e) =>
              currentCard == 1 ? null : setCurrentCard(e.target.id)
            }
            className={currentCard == 1 ? "card-choosen" : "card"}
          >
            Max Accelerations
          </p>
          <p
            id="2"
            onClick={(e) =>
              currentCard == 2 ? null : setCurrentCard(e.target.id)
            }
            className={currentCard == 2 ? "card-choosen" : "card"}
          >
            Jerk Limit's
          </p>
        </div>
        {currentCard == 0 ? (
          <div className="category color-1">
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
        ) : null}
        {currentCard == 1 ? (
          <div className="category color-3">
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
        ) : null}
        {currentCard == 2 ? (
          <div className="category color-2">
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
        ) : null}
        <p className="info">Extruder Settings</p>
        <div className="cards">
          {printerInfo != null
            ? Array.from(
                {
                  length: applyToAll
                    ? 1
                    : Object(Object(printerInfo[choosenPrinter]).extruder)
                        .number,
                },
                (_, index) => {
                  return (
                    <p
                      id={index + 1}
                      onClick={(e) =>
                        currentExtruder == index + 1
                          ? null
                          : setCurrentExtruder(e.target.id)
                      }
                      className={
                        currentExtruder == index + 1 ? "card-choosen" : "card"
                      }
                    >
                      {index + 1}
                    </p>
                  );
                }
              )
            : null}
          {Object(Object(printerInfo[choosenPrinter]).extruder).number > 1 ? (
            <p
              className={
                applyToAll ? "apply-to-all true" : "apply-to-all false"
              }
              onClick={() => {
                setApplyToAll(!applyToAll);
              }}
            >
              Apply to all
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CreatePrinterSettings;
