import { ReactNode } from 'react';
import './ListButton.css'

interface IListButton {
    children: ReactNode;
    choose: () => void
}

export const ListButton: React.FC<IListButton> = ({ children, choose, ...props }) => {

    return (
        <button {...props} onClick={choose} className='listButton'>
            {children}
        </button>
    )
}