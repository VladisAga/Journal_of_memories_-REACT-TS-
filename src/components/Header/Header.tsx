import { useState } from 'react';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import styles from './Header.module.css';
import { Button } from '../Button/Button';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';


export const Header = () => {;
    const [nameValue, setNameValue] = useState('');
    const [optionArr, setOptionArr] = useLocalStorage('IOptionArr');

    const addName = () => {
        if (nameValue.trim()) {
            const timestamp = new Date().getTime();
            const option = {
                value: timestamp,
                text: nameValue,
                id: timestamp + 1
            }
            setOptionArr([...optionArr, option])
            setNameValue('');
        }
        setNameValue('');
    }

    return (
        <header className={styles.header}>
            <section className={styles.logoBox}>
                <p className={styles.logo}>MY MEMORIES ABOUT</p>
                <Select options={optionArr} />
            </section>
            <div className={styles.inputBox}>
                <Input type='text' value={nameValue} placeholder='About whom your new memories' className={styles.addName} onChange={(e) => setNameValue(e.target.value)} />
                <Button className={styles['addBtn']} onClick={addName}>+</Button>
            </div>
        </header>
    )
}
