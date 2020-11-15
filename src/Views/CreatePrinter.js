import React, { useEffect, useState } from "react";
import InputField from "../components/inputField/InputField";
import SelectMenu from "../components/selectMenu/SelectMenu";
import TextArea from "../components/textArea/TextArea";
import UploadForm from "../components/uploadForm/UploadForm";
import { DeleteImage, PostImage } from "../services/Image";
import { PostData } from "../services/PostData";
import "../style/CreatePrinter.scss";

const CreatePrinter = () => {
  const [imageName, setImageName] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [coordInfo, setCoordInfo] = useState(false);
  const [options, setOptions] = useState(["Cartesian", "Delta"]);
  const [type, setType] = useState(0);
  const [maxX, setMaxX] = useState("");
  const [maxY, setMaxY] = useState("");
  const [maxZ, setMaxZ] = useState("");
  const [maxR, setMaxR] = useState("");
  const [finalInfo, setFinalInfo] = useState(false);
  const [extruderNumber, setExtruderNumber] = useState();
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const onImage = async (photo) => {
    if (photo[0] != null) {
      try {
        const data = new FormData();
        data.append("image", photo[0]);
        PostImage(data).then((res) => {
          console.log(res);
          setImagePath("http://localhost:3000" + res.path + res.fileName);
          setImageName(res.path + res.fileName);
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  const changePhoto = () => {
    DeleteImage(imageName).then((res) => {
      console.log(res);
    });
    setImageName("");
    setImagePath("");
  };
  useEffect(() => {
    if (name != "" && brand != "") setCoordInfo(true);
  }, [name, brand]);
  useEffect(() => {
    if ((maxX != "" && maxY != "" && maxZ != "") || (maxR != "" && maxZ != ""))
      setFinalInfo(true);
  }, [maxX, maxY, maxZ, maxR]);
  const validateForm = () => {
    return true;
  };
  useEffect(() => {
    console.log(description);
  }, [description]);
  const handleSubmit = () => {
    if (validateForm) {
      if (type) {
        var coordinates = { maxR: maxR, maxZ: maxZ };
      } else {
        var coordinates = { maxX: maxX, maxY: maxY, maxZ: maxZ };
      }
      const data = {
        name: name,
        brand: brand,
        type: options[type],
        img_path: imageName,
        description: description,
        extruder: {
          number: extruderNumber,
        },
        coordinates: coordinates,
      };
      PostData("/printers/create", data).then((res) => {
        console.log(res);
      });
    }
  };
  return (
    <div className="create-printer-form">
      <div className="main-container">
        <div className="horizontal-wrapper color-1">
          <UploadForm
            onImage={onImage}
            imagePath={imagePath}
            changePhoto={changePhoto}
          />
          <div className="vertical-wrapper">
            <InputField
              name="printer"
              text="Printer Name"
              value={setName}
            ></InputField>
            <InputField
              name="brand"
              text="Printer Brand"
              value={setBrand}
            ></InputField>
          </div>
        </div>
        {coordInfo ? (
          <>
            <label className="label-more">
              <span>More info</span>
            </label>
            <div className="horizontal-wrapper more-info color-2">
              <div className="vertical-wrapper">
                <SelectMenu
                  options={options}
                  value={setType}
                  name="Type"
                ></SelectMenu>
              </div>
              {type == 0 ? (
                <>
                  <div className="vertical-wrapper">
                    <InputField
                      id="0"
                      name="maxX"
                      text="Max X possition"
                      value={setMaxX}
                    ></InputField>
                  </div>
                  <div className="vertical-wrapper">
                    <InputField
                      id="1"
                      name="maxY"
                      text="Max Y possition"
                      value={setMaxY}
                    ></InputField>
                  </div>
                  <div className="vertical-wrapper">
                    <InputField
                      id="2"
                      name="maxZ"
                      text="Max Z possition"
                      value={setMaxZ}
                    ></InputField>
                  </div>
                </>
              ) : (
                <>
                  <div className="vertical-wrapper">
                    <InputField
                      id="0"
                      name="maxR"
                      text="Max R possition"
                      value={setMaxR}
                    ></InputField>
                  </div>
                  <div className="vertical-wrapper">
                    <InputField
                      id="1"
                      name="maxZ"
                      text="Max Z possition"
                      value={setMaxZ}
                    ></InputField>
                  </div>
                  <div className="vertical-wrapper"></div>
                </>
              )}
            </div>
          </>
        ) : null}
        {finalInfo ? (
          <div className="horizontal-wrapper more-info color-3">
            <div className="vertical-wrapper">
              <SelectMenu
                options={[1, 2, 3, 4, 5]}
                value={setExtruderNumber}
                name="Number of extruders"
              ></SelectMenu>
              <button className="btn-submit btn-custom" onClick={handleSubmit}>
                CREATE PRINTER
              </button>
            </div>

            <div className="vertical-wrapper">
              <TextArea text="Description" value={setDescription}></TextArea>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CreatePrinter;
