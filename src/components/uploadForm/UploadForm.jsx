import React from "react";
import ImageUploader from "react-images-upload";
import "./uploadForm.scss";

const UploadForm = (props) => {
  if (props.imagePath === "") {
    return (
      <form>
        <ImageUploader
          className="image-uploader"
          withIcon={true}
          singleImage={true}
          withPreview={true}
          label="Max size 5 MB"
          buttonText="Chooose image"
          onChange={props.onImage}
          imgExtension={[".jpg", ".jpeg", ".png"]}
          maxFileSize={1024 * 1024 * 5}
        />
      </form>
    );
  } else {
    return (
      <div className="fileUploader image-uploader">
        <img className="upload_image" src={props.imagePath} />
        <button className="change_button" onClick={props.changePhoto}>
          Change
        </button>
      </div>
    );
  }
};

export default UploadForm;
