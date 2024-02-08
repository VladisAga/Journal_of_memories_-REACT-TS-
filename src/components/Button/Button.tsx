import { ReactNode } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface IButton {
    children: ReactNode;
    className?: string;
    onClick?: (elem: any) => void;
}

export const Button: React.FC<IButton> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={cn(styles['btn'], className)} >
            {children}
        </button >
    );
};