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
      <Canvas data={{
        'פתח תקווה': {
          sadir: {
            'משה ': 22,
            'עדי': 18,
            'אלדר': 16,
            'גבריאל': 14,
            'אביאל': 12,
          },
          reserve: {
            'משה ': 23,
            'עדי': 20,
            'אלדר': 17,
            'גבריאל': 15,
            'אביאל': 13,
            'עידו': 11,
            'נוי': 8,
            'אלון': 6,
            'איריס': 4,
            'חגי': 2,
            'ליהיא': 5,
            'נגה': 3
          }
        },
        'תל אביב': {
          sadir: {
            'משה ': 6,
            'עדי': 7,
            'אלדר': 4,
            'גבריאל': 15,
            'אביאל': 13,
            'עידו': 11,
            'נוי': 8,
            'אלון': 6,
            'איריס': 4,
            'חגי': 2,
            'ליהיא': 7,
            'נגה': 4
          },
          reserve: {
            'משה ': 9,
            'עדי': 45,
            'אלדר': 5,
            'גבריאל': 5,
            'אביאל': 14,
            'עידו': 12,
            'נוי': 9,
            'אלון': 7,
            'איריס': 5,
            'חגי': 3,
            'ליהיא': 4,
            'נגה': 5
          }
        },
        'אילת': {
          sadir: {
            'משה ': 6,
            'עדי': 4,
            'אלדר': 2,
            'גבריאל': 23,
            'אביאל': 20,
            'עידו': 17,
            'נוי': 15,
            'אלון': 13,
            'איריס': 11,
            'חגי': 8,
            'ליהיא': 6,
            'נגה': 8
          },
          reserve: {
            'משה ': 7,
            'עדי': 5,
            'אלדר': 3,
            'גבריאל': 4,
            'אביאל': 22,
            'עידו': 18,
            'נוי': 16,
            'אלון': 14,
            'איריס': 12,
            'חגי': 9,
            'ליהיא': 7,
            'נגה': 9
          }
        },
        'ירושלים': {
          sadir: {
            'משה ': 13,
            'עדי': 11,
            'אלדר': 8,
            'גבריאל': 9,
            'אביאל': 45,
            'עידו': 5,
            'נוי': 5,
            'אלון': 14,
            'איריס': 12,
            'חגי': 9,
            'ליהיא': 7,
            'נגה': 5
          },
          reserve: {
            'משה ': 14,
            'עדי': 12,
            'אלדר': 9,
            'גבריאל': 7,
            'אביאל': 6,
            'עידו': 7,
            'נוי': 4,
            'אלון': 15,
            'איריס': 13,
            'חגי': 11,
            'ליהיא': 8,
            'נגה': 45
          }
        },
        'רמת גן': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'קריית שמונה ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'חולון': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'ראשון לציון ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'לוד': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'מודיעין': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'גבעת שמואל': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'כיסופים': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'ברקאי ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'עזה': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'לבנון ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'קריית גת': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'הרצליה': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'רמת השרון ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'הוד השרון': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'רעננה': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          },
          reserve: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        },
        'כפר סבא ': {
          sadir: {
            'משה ': undefined,
            'עדי': undefined,
            'אלדר': undefined,
            'גבריאל': undefined,
            'אביאל': undefined,
            'עידו': undefined,
            'נוי': undefined,
            'אלון': undefined,
            'איריס': undefined,
            'חגי': undefined,
            'ליהיא': undefined,
            'נגה': undefined
          }
        }
      }} />
      <img src="./../assets/images/logo.png"></img>
      <DropZone setJsonData={setJsonData}></DropZone>

    </main>
  );
}
