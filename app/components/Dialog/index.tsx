import { FC } from "react";
import cx from 'classnames';
import styles from './Dialog.module.css';
import Image from "next/image";
import close from "@/assets/images/close.svg"
interface DialogProps {
    children: JSX.Element;
    isOpen: boolean;
    onClose: () => void;
}

const Dialog: FC<DialogProps> = (props) => {
    const { children, isOpen, onClose } = props;

    return (isOpen && <div className={cx(styles.dialog, isOpen ? styles.open : styles.close)}>
        <button className={styles.button}><Image alt="" width={30} height={30} src={close.src} onClick={onClose} /></button>
        {children}
    </div>)
}

export default Dialog;