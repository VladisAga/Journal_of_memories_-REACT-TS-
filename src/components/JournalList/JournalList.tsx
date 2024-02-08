import './JournalList.css';
import '../ListButton/ListButton'
import { ReactNode } from 'react';

interface IJournalList {
    children: ReactNode;
}

export const JournalList: React.FC<IJournalList> = ({ children }) => {
    return (
        <div className='ulJournal'>
            {children}
        </div>
    )
}