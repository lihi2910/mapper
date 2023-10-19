"use client";
import { useState } from "react";
import Canvas from "./components/Canvas";
import DropZone from "./components/DropZone";
import styles from "./page.module.css";
import Image from "next/image";
import downloadImg from "@/assets/images/download.png"
import harbotBarzal from "@/assets/images/harbotBarzal.png"
import sapir from "@/assets/images/sapir.png"
import yesodot from "@/assets/images/yesodot.png"

export default function Home() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image
            alt="logo"
            className={styles.logo}
            src="/logo.png"
            width={70}
            height={70}
          />
          <div className={styles.logoText}>Mapper</div>
        </div>
        <a
          href="/example.xlsx"
          download="example.xlsx"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.download}
            src={downloadImg}
            width={70}
            height={70}
            title={"Download template"} alt={""}          />
        </a>
      </div>

      <div className={styles.canvas}>
        <Canvas data={jsonData} />
      </div>

      <DropZone setJsonData={setJsonData}></DropZone>
      <div></div>
      <div className={styles.footer}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src={sapir}
            width={70}
            height={70}
            alt={""}
          />
          <Image
            className={styles.logo}
            src={yesodot}
            width={100}
            height={70}
            alt={""}
          />
          <Image
            className={styles.logo}
            src={harbotBarzal}
            width={100}
            height={70}
            alt={""}
          />
        </div>
        <p></p>
      </div>
    </main>
  );
}
