export interface IJournal {
    title: string;
    text: string;
    date: string;
    userId: number;
    topic: string;
    id?: number
}

export interface IOptionArr {
    value: number;
    text: string;
    id: number;
}

export interface IInputProps {
    formValidity?: any;
    className?: string;
    appearence?: string;
    type: string;
    placeholder?: string;
    id?: string;
    name?: string;
    onChange: (e: any) => void
    value: string
}

export interface IJournalUnd {
    title: string;
    text: string;
    date: string;
    topic: string;
}

export interface IJournalAndId {
    title: string;
    text: string;
    date: string;
    id: number;
    userId: number;
    topic: string;
}

export interface IFormValidState {
    title: boolean;
    text: boolean;
    date: boolean;
}

export interface IInitialState {
    formValidity: {
        title: boolean;
        text: boolean;
        date: boolean;
    },
    formValues: {
        title: string;
        text: string;
        date: string ;
        topic: string
    },
    isFormReadyToSubmit: boolean
}

interface IResetFormAction {
    type: 'RESET_FORM_VALIDITY'
}

interface IClearFormAction {
    type: 'CLEAR_FORM'
}

interface ISubFormAction {
    type: 'SUBMIT_FORM',
    payload: {
        title: string;
        text: string;
        date: string;
    }
}

interface ISetValuesAction {
    type: 'SET_VALUES',
    payload: {
        title?: string;
        text?: string;
        date?: string;
        userId?: number;
    } | null;
}

export type ReduceAction = IResetFormAction | ISubFormAction | IClearFormAction | ISetValuesAction;