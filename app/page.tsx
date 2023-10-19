"use client";
import { useState } from "react";
import Canvas from "./components/Canvas";
import DropZone from "./components/DropZone";
import styles from "./page.module.css";
import Image from "next/image";
import downloadImg from "@/assets/images/download.svg"
import harbotBarzal from "@/assets/images/harbotBarzal.png"
import sapir from "@/assets/images/sapir.png"
import yesodot from "@/assets/images/yesodot.png"
import logo from "@/assets/images/logo.png"
import Dialog from "./components/Dialog";

export default function Home() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <div className={styles.logoContainer}>
          <Image
            alt=""
            className={styles.logo}
            src={logo}
            width={60}
            height={60}
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
            src={downloadImg.src}
            width={45}
            height={45}
            title={"Download template"} alt={""} />
        </a>
      </div>

      <div className={styles.body}>
        <DropZone setJsonData={setJsonData}></DropZone>

        <Dialog isOpen={!!jsonData} onClose={() => setJsonData(null)}>
          <Canvas data={jsonData} />
        </Dialog>
      </div>


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
            height={50}
            alt={""}
          />
        </div>
      </div>
    </main>
  );
}
