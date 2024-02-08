import { IInitialState, IJournal, IJournalUnd, ReduceAction, IJournalAndId } from "../../types/types";

export const initialState: IInitialState = {
    formValidity: {
        text: true,
        title: true,
        date: true
    },
    formValues: {
        title: '',
        text: '',
        date: '',
        topic: ''
    },
    isFormReadyToSubmit: false
};

export function formReducer(state: any, action: ReduceAction) {
    switch (action.type) {
        case 'CLEAR_FORM': return {
            ...state, formValues: initialState.formValues
        }
        case 'SET_VALUES': return {
            ...state, formValues: { ...state.formValues, ...action.payload }
        }
        case 'SUBMIT_FORM': {
            console.log(state)
            const stateOfText = !!action.payload.text.trim().length;
            const stateOfTitle = !!action.payload.title.trim().length;
            const stateOfDate = !!action.payload.date;
            return {
                formValidity: {
                    text: stateOfText,
                    title: stateOfTitle,
                    date: stateOfDate,
                },
                formValues: action.payload,
                isFormReadyToSubmit: stateOfText && stateOfTitle && stateOfDate
            };
        }
        case 'RESET_FORM_VALIDITY':
            return { ...state, formValidity: initialState.formValidity, isFormReadyToSubmit: initialState.isFormReadyToSubmit };
    }
}