"use client"
import { FC, useEffect, useRef, useState } from "react";
import mapImg from '@/assets/images/map.png'
import pinImg from '@/assets/images/pin.svg'
import styles from "./Canvas.module.css"

const translations: Translations = {
    pt: {
        x: 300,
        y: 10
    },
    js: {
        x: 180,
        y: 80
    },
    hf: {
        x: 180,
        y: 600
    }
}

interface Translations {
    [key: string]: {
        x: number,
        y: number
    }
}
interface CanvasProps {
    data?: any;
}

const Canvas: FC<CanvasProps> = (props) => {
    const { data } = props;
    const canvasRef = useRef(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D>();
    const [sideDiff, setSideDiff] = useState(0);
    const [mapWidth, setMapWidth] = useState(0);

    const getMapX = (x: number) => {
        return sideDiff + x;
    }

    useEffect(() => {
        const canvas = canvasRef.current as any as HTMLCanvasElement;
        const context = canvas!.getContext('2d');
        setCtx(context!);
    }, []);

    useEffect(() => {
        if (!ctx) return;
        const map = new Image(354, 950);
        map.onload = () => {
            setMapWidth(map.width);
            setSideDiff(600 - map.width / 2);
            ctx!.drawImage(map, 600 - map.width / 2, 0, map.width, map.height);
        };
        map.src = mapImg.src;
    }, [ctx])

    useEffect(() => {
        if (!sideDiff || !data) return;

        const dataAsArray = Object.entries(data);
        dataAsArray.sort(((a, b) => (translations[a[0]].x - translations[b[0]].x || translations[a[0]].y - translations[b[0]].y)))
            .forEach(([key, value], index) => {
                const isLeft = index < (dataAsArray.length / 2);
                const pin = new Image();
                pin.onload = () => {
                    ctx!.drawImage(pin, getMapX(translations[key].x), translations[key].y, pin.width, pin.height);
                };
                pin.src = pinImg.src;

                if (isLeft) {
                    generateText(value as { [type: string]: { [unit: string]: number } }, 10, 30)
                } else {
                    generateText(value as { [type: string]: { [unit: string]: number } }, sideDiff + mapWidth + 10, 30)
                }
            })
    }, [sideDiff, data, ctx])

    const generateText = (data: { [type: string]: { [unit: string]: number } }, x: number, y: number,) => {
        Object.entries(data).forEach(([type, numbers]) => {
            const isReserve = type === "reserve";
            ctx!.fillStyle = isReserve ? 'red' : 'blue';
            const fillStart = isReserve ? x : (x + 300);
            ctx!.font = "20px Arial";
            ctx!.fillText("fdgsgf", fillStart, y);
            ctx!.fillRect(fillStart, y, 100, numbers.length * 20);

            Object.entries(numbers).forEach(([unit, count], index) => {
                ctx!.font = "16px Arial";
                ctx!.fillText(`${unit}: ${count}`, fillStart, y + (index + 1) * 20);
            })
        })
    }

    return <>
        <canvas className={styles.canvas} ref={canvasRef} width={1200} height={950} />
    </>
}

export default Canvas;