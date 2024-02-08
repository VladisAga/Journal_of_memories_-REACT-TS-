import { ReactNode } from 'react';
import './Body.css';

interface IBody {
    children: ReactNode;
}

export const Body: React.FC<IBody> = ({ children }) => {

    return (
        <div className='body'>
            {children}
        </div>
    )
}