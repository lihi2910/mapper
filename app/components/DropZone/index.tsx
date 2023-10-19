import React, { useState } from "react";
import ExcelJS from "exceljs";
import { useDropzone } from 'react-dropzone';
import { getExcelinJson } from "./../../utils/excelToJson";
import uploadImg from "@/assets/images/uploadImg.svg";
import Image from "next/image";
import styles from './DropZone.module.css';

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
      <div {...getRootProps()} className={styles.dropzone}>
        <input {...getInputProps()} accept=".xls, .xlsx" />
        {isDragActive ? (
          <p>גרור לפה את הקובץ או לחץ כאן</p>
        ) : (
          <p>גרור לפה את הקובץ או לחץ כאן</p>
        )}
        <Image alt="" src={uploadImg.src} width={100} height={100} />
      </div>
      {excelData && (
        <div>
          {/* Display or process excelData as needed */}
        </div>
      )}
    </div>
  );
};
export default DropZone;
