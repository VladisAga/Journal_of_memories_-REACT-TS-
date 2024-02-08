import styles from './Input.module.css';
import cn from 'classnames';
import {IInputProps} from '../../types/types';

export const Input: React.FC<IInputProps> = ({formValidity = true, className, appearence, onChange, value, ...props}) => {
    return (
        <input 
        {...props} 
        value={value !== undefined ? value : ''}
        onChange={onChange} 
        className={cn(className, styles['inputValid'], {
            [styles['invalid']]: !formValidity,
            [styles['topic']]: appearence === 'title'
        })} />
    )
}
