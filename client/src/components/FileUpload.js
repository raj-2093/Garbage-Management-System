import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = acceptedFiles => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*,video/*',
  });

  const handleUpload = async () => {
    alert('File Upload successfull');
  };

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #000', padding: '20px', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Drag & drop some files here, or click to select files</p>
      </div>
      <div>
        {files.map(file => (
          <div key={file.name}>
            <strong>{file.name}</strong> ({file.size} bytes)
          </div>
        ))}
      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;