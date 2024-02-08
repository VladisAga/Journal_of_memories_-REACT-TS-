import { ReactNode } from 'react';

import './LeftSide.css';

interface ILeftSide {
    children: ReactNode;
}

export const LeftSide: React.FC<ILeftSide> = ({ children }) => {


    return (
        <div className='LeftSide'>
            {children}
        </div>
    )
}