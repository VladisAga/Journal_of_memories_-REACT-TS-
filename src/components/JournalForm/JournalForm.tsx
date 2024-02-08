import { ReactNode, FormEvent, useState, useEffect, useReducer, useRef, RefObject, useContext } from 'react';
import styles from './JournalForm.module.css';
import { Button } from '../Button/Button';
import { IJournal } from '../../types/types';
import { IFormValidState, IInitialState, IJournalAndId } from '../../types/types';
import { formReducer, initialState } from './JournalForm.state';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { UserContext } from '../../context/user.context';

interface IJournalForm {
    addItem: (obj: IJournal) => void;
    data: IJournal | null;
    deleteBtn: (value: number) => void;
}

export const JournalForm: React.FC<IJournalForm> = ({ addItem, data, deleteBtn }) => {

    const { userId } = useContext(UserContext)!;
    const [state, formDispatch] = useReducer(formReducer, initialState);
    const formFocusRef: React.RefObject<HTMLFormElement> = useRef(null);
    const { formValidity, formValues, isFormReadyToSubmit } = state;

    const focusError = () => {
        if (formFocusRef.current) {
            switch (false) {
                case (formValidity.title):
                    formFocusRef.current.Title.focus();
                    return;
                case (formValidity.date):
                    formFocusRef.current.date.focus();
                    return;
                case (formValidity.text):
                    formFocusRef.current.text.focus();
                    return;
            }
        }
    };

    useEffect(() => {
        if (!data) {
            formDispatch({ type: 'CLEAR_FORM' });
            formDispatch({ type: 'RESET_FORM_VALIDITY' });
        }
        formDispatch({ type: 'SET_VALUES', payload: { ...data } });;
    }, [data])

    useEffect(() => {
        let time: NodeJS.Timeout;
        if (!formValidity.date || !formValidity.text || !formValidity.title) {
            focusError();
            time = setTimeout(() => {
                formDispatch({ type: 'RESET_FORM_VALIDITY' });
            }, 2000);
        }
        return () => {
            clearTimeout(time);
        };
    }, [formValidity]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            addItem(formValues);
            formDispatch({ type: 'CLEAR_FORM' });
            formDispatch({ type: 'RESET_FORM_VALIDITY' });
        }
    }, [isFormReadyToSubmit]);

    const saveFormData = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const data = new FormData(target);
        const dateString = data.get('date') as string;
        if (userId) {
            const dataObj: IJournal = {
                title: data.get('title') as string,
                text: data.get('text') as string,
                topic: data.get('topic') as string,
                date: dateString,
                userId: userId
            };
            formDispatch({ type: 'SUBMIT_FORM', payload: dataObj })
        }
    };

    const onChange = (e: any) => {
        formDispatch({ type: 'SET_VALUES', payload: { [e.target.name]: e.target.value } });
    }

    const delBtn = () => {
        data?.id && deleteBtn(data.id);
        formDispatch({ type: 'CLEAR_FORM' });
    }

    return (
        <>
            <form className={styles.form} onSubmit={saveFormData} ref={formFocusRef}>
                <div className={styles.topicAndDel}>
                    <Input type="text" onChange={onChange} value={formValues.title} placeholder='Topic' appearence='title' formValidity={formValidity.title} id='Title' name='title' />
                    {data?.id && <button className={styles.delBtn} type='button' onClick={delBtn}>
                        <img className={styles.bucket} src="/images/png/doodle.png" alt="bucket" />
                    </button>}
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="date">
                        <img src="/images/png/календарь.png" alt="" />
                        Даты
                    </label>
                    <Input type="date" onChange={onChange} name='date' id='date' value={formValues.date} formValidity={formValidity.date} />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="topic">
                        <img src="/images/png/папка.png" alt="" />
                        Метки
                    </label>
                    <Input type="text" onChange={onChange} id='topic' name='topic' value={formValues.topic} className={formValidity.text} />
                </div>
                <textarea name="text" onChange={onChange} value={formValues.text} className={cn(styles['textArea'], {
                    [styles['invalid']]: !formValidity.text
                })} rows={10} id="" ></textarea>
                <div className={styles.btnBox}>
                    <Button>Сохранить</Button>
                </div>
            </form>
        </>
    )
}