import React, { useState } from "react";
import InputField from "../components/inputField/InputField";
import UploadForm from "../components/uploadForm/UploadForm";
import { DeleteImage, PostImage } from "../services/Image";
import "../style/CreatePrinter.scss";

const CreatePrinter = () => {
  const [imageName, setImageName] = useState("");
  const [imagePath, setImagePath] = useState("");

  const onImage = async (photo) => {
    if (photo[0] != null) {
      try {
        const data = new FormData();
        data.append("image", photo[0]);
        PostImage(data).then((res) => {
          console.log(res);
          setImagePath("http://localhost:3000" + res.path + res.fileName);
          setImageName(res.fileName);
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

  return (
    <div className="create-printer-form">
      <div className="horizontal-wrapper">
        <UploadForm
          onImage={onImage}
          imagePath={imagePath}
          changePhoto={changePhoto}
        />
        <div className="vartical-wrapper">
          <InputField name="printer" text="Printer Name"></InputField>
          <InputField name="brand" text="Printer Brand"></InputField>
        </div>
      </div>
    </div>
  );
};

export default CreatePrinter;
