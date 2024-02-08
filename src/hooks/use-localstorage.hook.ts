import { useState, useEffect } from "react";
import { IJournalAndId, IJournal, IOptionArr } from "../types/types";

export function useLocalStorage(key: string): [Array<IJournalAndId | IOptionArr>, (dataToSave: Array<IJournalAndId | IOptionArr>) => void] {
    const [data, setData] = useState<Array<IJournalAndId | IOptionArr>>([]);
    console.log(data);

    function saveData(dataToSave: Array<IJournalAndId | IOptionArr>) {
            localStorage.setItem(key, JSON.stringify(dataToSave));
            setData(dataToSave);    
    }

    useEffect(() => {
        const res = localStorage.getItem(key);
        if (res) {
            try {
                const savedData = JSON.parse(res);
                setData(savedData);
            } catch (error) {
                console.error("Error parsing data from localStorage:", error);
            }
        }
    }, [key]);
    
    return [data, saveData]
}
