"use client";
import { useState } from "react";
import Canvas from "./components/Canvas";
import UploadFile from "./components/UploadFile";
import DropZone from "./components/DropZone";
import FileDownloader from "./components/Download"
import styles from "./page.module.css";

export default function Home() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <main className={styles.main}>
      <img src="./../assets/images/logo.png"></img>
      <Canvas data={{ pt: { reserve: { lihi: 30, noga: 100, total: 130 }, sadir: { lihi: 30, noga: 100, total: 130, } }, js: { reserve: {}, sadir: { lihi: 50, noga: 34, total: 84 } }, hf: { reserve: { lihi: 30, noga: 100, total: 130 }, sadir: { lihi: 30, noga: 100, total: 130 } } }} />
      <DropZone setJsonData={setJsonData}></DropZone>
      

    </main>
  );
}
