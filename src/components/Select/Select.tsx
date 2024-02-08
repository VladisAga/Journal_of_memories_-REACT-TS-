import styles from './Select.module.css';
import { UserContext } from '../../context/user.context';
import React, { ReactNode, useContext, ChangeEvent, SetStateAction } from 'react';
import { IOptionArr, IJournalAndId } from '../../types/types';

interface ISelect {
    options: Array<IJournalAndId | IOptionArr>;
}

export const Select: React.FC<ISelect> = ({ options }) => {
    console.log(options)

    const { userId, setUserId } = useContext(UserContext)!; // ! значит что переменные не могут быть null or undefined

    const changeUser = (e: ChangeEvent<HTMLSelectElement>) => {
        setUserId(Number(e.target.value));
    }

    return (
        <div>
            <select name="" id="" className={styles.nameSelect} value={userId} onChange={changeUser}>
                {!options.length && <option>...</option>}
                {options.map((value) => {
                    if ('value' in value) {
                        return (
                            <option key={value.id} className={styles.option} value={value.value}>
                                {value.text}
                            </option>
                        );
                    }
                    return null;
                })}
            </select>
        </div>
    )
}
