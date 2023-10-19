"use client"
import { FC, useEffect, useRef, useState } from "react";
import mapImg from '@/assets/images/map.png'
import pinImg from '@/assets/images/pin.svg'
import styles from "./Canvas.module.css"

type TypeUnitMap = Record<string, Record<string, number>>;

const translations: Translations = {
    'פתח תקווה': {
        x: 300,
        y: 10
    },
    'תל אביב': {
        x: 180,
        y: 400
    },
    אילת: {
        x: 180,
        y: 600
    },
    ירושלים: {
        x: 200,
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
    const canvasWidth = 1200;
    const canvasHeight = 950;


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
        const map = new Image(354, canvasHeight);
        map.onload = () => {
            setSideDiff(canvasWidth / 2 - map.width / 2);
            ctx!.drawImage(map, canvasWidth / 2 - map.width / 2, 0, map.width, map.height);
        };
        map.src = mapImg.src;
    }, [ctx])

    useEffect(() => {
        if (!sideDiff || !data) return;

        const dataAsArray = Object.entries(data);
        const sortedByX = dataAsArray.filter(([location, _value]) => translations[location])
            .sort((([locationA, _A], [locationB, _B]) => (translations[locationA].x - translations[locationB].x)))
        const middle = Math.ceil(sortedByX.length / 2);
        const sortedLeft = sortedByX.splice(0, middle)
            .sort((([locationA, _A], [locationB, _B]) => (translations[locationA].y - translations[locationB].y)));
        generateBoxes(sortedLeft as [string, TypeUnitMap][], true);
        const sortedRight = sortedByX.splice(-middle)
            .sort((([locationA, _A], [locationB, _B]) => (translations[locationA].y - translations[locationB].y)));
        generateBoxes(sortedRight as [string, TypeUnitMap][], false);

    }, [sideDiff, data, ctx])

    const generateBoxes = (items: [string, TypeUnitMap][], isLeft: boolean) => {
        let currentY = 30;
        const boxX = isLeft ? 30 : 830;
        items.forEach(([location, value]) => {
            const x = translations[location].x;
            const y = translations[location].y;

            const pin = new Image(12, 21);
            pin.onload = () => {
                if (!translations[location]) return;
                ctx!.drawImage(pin, getMapX(x) - pin.width / 2, y - pin.height, pin.width, pin.height);
            };
            pin.src = pinImg.src;

            const [boxHeight, strokeX] = generateBox(value, location, boxX, currentY);
            generateArrow({ x: x + sideDiff, y }, { x: isLeft ? strokeX : boxX - 20, y: currentY - 20 + boxHeight / 2 })
            currentY += boxHeight + 10;
        })
    }

    const generateArrow = (from: { x: number, y: number }, to: { x: number, y: number }) => {
        ctx!.beginPath();
        ctx!.strokeStyle = "black";
        ctx!.moveTo(from.x, from.y)
        ctx!.lineTo(to.x, to.y)
        ctx!.stroke()
    }

    const getItemWidth = (items: Record<string, number>, location: string) => {
        const longest = Object.entries(items).reduce((prev, [key, value]) => {
            return (`${key}:  ${value}`).length > prev.length ? `${key}:  ${value}` : prev;
        }, "");
        ctx!.font = "15px Arial";
        const itemsWidth = ctx!.measureText(longest).width;
        ctx!.font = "16px Arial";
        const locaitonWidth = ctx!.measureText(location).width;
        return Math.max(locaitonWidth, itemsWidth);
    }

    const generateBox = (data: TypeUnitMap, location: string, x: number, y: number,): [number, number] => {
        let biggestHeight = 0;
        let strokeX: number = 0;
        Object.entries(data).forEach(([type, numbers]) => {
            const isReserve = type === "reserve";
            const longetWidth = getItemWidth(numbers, location);
            const itemHeight = Object.keys(numbers).length * 20;
            const fillStart = isReserve ? x : x + longetWidth + 30;
            const padding = 10;

            ctx!.fillStyle = isReserve ? '#f9665e' : '#99C3EC';
            ctx!.strokeStyle = 'transparent';

            ctx!.beginPath();
            ctx!.roundRect(fillStart - 20, y - 20, longetWidth + 20, itemHeight + 30, [10]);
            ctx?.fill();
            ctx!.stroke();
            if(!strokeX) strokeX = fillStart + longetWidth;

            ctx!.font = "16px Arial";
            ctx!.fillStyle = 'black';

            ctx!.fillText(location, fillStart + longetWidth - padding, y);
            Object.entries(numbers).forEach(([unit, count], index) => {
                ctx!.font = "15px Arial";
                ctx!.fillStyle = 'black';
                ctx!.fillText(`${unit}: ${count}`, fillStart + longetWidth - padding, y + (index + 1) * 20);
            })

            biggestHeight = Math.max(itemHeight + 30, biggestHeight);
        })

        return [biggestHeight, strokeX];

    }

    return <canvas dir="rtl" className={styles.canvas} ref={canvasRef} width={canvasWidth} height={canvasHeight} />

}

export default Canvas;