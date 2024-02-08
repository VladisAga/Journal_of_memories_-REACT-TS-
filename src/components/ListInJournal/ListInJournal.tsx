import { useRef, useEffect } from 'react';
import styles from './ListInJournal.module.css';

interface IListInJournal {
    title: string;
    text: string;
    date: string;
}

export const ListInJournal: React.FC<IListInJournal> = ({ title, text, date }) => {

    const widthRef = useRef<HTMLSpanElement>(null);
    const editedText = () => {
        if (text.length > 24) {
            return text.slice(0, 24) + '...';
        }
        return text;
    }

    return (
        <>
            <span className={styles.listElement}>
                <span className={styles.firstElement}>{title}</span>
                <span className={styles.lastLine}>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.text} ref={widthRef}>{editedText()}</span>
                </span>
            </span>
        </>
    )
}