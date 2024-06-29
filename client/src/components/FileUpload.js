import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import Modal from "./Modal";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*,video/*",
  });

  const handleUpload = async () => {
    // alert("File Upload successfull");
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <>
      <button onClick={openModal}>Upload Files</button>
      <form onSubmit={handleSubmit}>
        <Modal isOpen={isOpen} onClose={closeModal}>
          <div
            {...getRootProps()}
            style={{
              border: "2px dashed #000",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
          </div>
          <div>
            {files.map((file) => (
              <div key={file.name}>
                <strong>{file.name}</strong> ({file.size} bytes)
              </div>
            ))}
          </div>
          <button type="submit">Upload</button>
        </Modal>
      </form>
    </>
  );
};

export default FileUpload;
