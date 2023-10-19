import React, { useState } from "react";
import ExcelJS from "exceljs";
import { useDropzone } from 'react-dropzone';
import { getExcelinJson } from "./../../utils/excelToJson";

const DropZone = ({ setJsonData }) => {
  const [excelData, setExcelData] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (e) => {
          const fileData = new Uint8Array(e.target.result);
          const workbook = new ExcelJS.Workbook();
          await workbook.xlsx.load(fileData);

          // Assuming the first worksheet is the one you want to process
          const worksheet = workbook.getWorksheet(1);
          
          setJsonData(await getExcelinJson(worksheet));
        };

        reader.readAsArrayBuffer(file);
      } catch (error) {
        console.error("Error reading Excel file:", error);
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} accept=".xls, .xlsx" />
        {isDragActive ? (
          <p>גרור לפה את הקובץ או לחץ כאן</p>
        ) : (
            <p>גרור לפה את הקובץ או לחץ כאן</p>
        )}
      </div>
      {excelData && (
        <div>
          {/* Display or process excelData as needed */}
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
  height: '250px',
  width: '1000px',
  position: 'absolute',
  left: '50%',
  top: '25%',
  transform: 'translate(-50%, -50%)'
};

export default DropZone;
