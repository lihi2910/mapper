"use client";
import { useState } from "react";
import Canvas from "./components/Canvas";
import DropZone from "./components/DropZone";
import styles from "./page.module.css";
import Image from "next/image";

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
            alt="download file"
            className={styles.download}
            src="/download.png"
            width={70}
            height={70}
            title={"Download file"}
          />
        </a>
      </div>

      <p>{JSON.stringify(jsonData)}</p>
      <div className={styles.canvas}>
        {" "}
        <Canvas
          data={{
            pt: {
              reserve: { lihi: 30, noga: 100, total: 130 },
              sadir: { lihi: 30, noga: 100, total: 130 },
            },
            js: { reserve: {}, sadir: { lihi: 50, noga: 34, total: 84 } },
            hf: {
              reserve: { lihi: 30, noga: 100, total: 130 },
              sadir: { lihi: 30, noga: 100, total: 130 },
            },
          }}
        />
      </div>

      <DropZone setJsonData={setJsonData}></DropZone>
      <div></div>
    </main>
  );
}
