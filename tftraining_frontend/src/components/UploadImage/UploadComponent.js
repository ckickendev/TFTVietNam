import { useState } from "react";
import { storage } from './firebase'
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import "./uploader.css";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";

export const UploadComponent = (props) => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [link, setLink] = useState();
  const [progress, setProgress] = useState(0);

  const uploadImage = () => {
    if (imageUpload == null) {
      return;
    }
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    const upload = uploadBytesResumable(imageRef, imageUpload);
    upload.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(upload.snapshot.ref).then((url) => {
          console.log(url);
          setLink(url);
          // props.updateUrl(url)
        });
      }
    );
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setImageUpload(selectedFile);
      const objectUrl = URL.createObjectURL(selectedFile);
      setImagePreview(objectUrl);
    }
  };

  return (
    <div className="form-loader d-flex text-center justify-content-center flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <form
          className="mt-4"
          action=""
          onClick={() => document.querySelector(".input-field").click()}
        >
          <input
            type="file"
            className="input-field form-input"
            hidden
            onChange={handleImageChange}
          />

          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: "auto", height: "200px" }}
            />
          ) : (
            <div>Click to upload Image</div>
          )}
        </form>
      </div>
      <button className="btn btn-danger" onClick={uploadImage} >Upload</button>
      <a>{link}</a>
    </div>
  );
};