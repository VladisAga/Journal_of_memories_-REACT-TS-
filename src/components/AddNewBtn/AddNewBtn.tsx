import React from 'react';
import './AddNewBtn.css';

interface IAddNewBtn {
    clearForm: () => void;
}

export const AddNewBtn: React.FC<IAddNewBtn> = ({ clearForm }) => {
    return (
        <button className='journalAdd' onClick={clearForm}>
            <span className='plus'>+</span> <span>Новое воспоминание</span>
        </button>
    );
};