import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

export interface contextProps {
    transactions: Array<any>;
    deleteTransaction: (a: number) => void;
    addTransaction: (b: object) => void
}

//initial state
const initialState = {
    transactions: [],
    deleteTransaction: () => undefined,
    addTransaction: () => undefined
}

//Create Context

export const GlobalContext = createContext<contextProps>(initialState);

//Provider 

export const GlobalProvider = (props: any): JSX.Element => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    function addTransaction(transaction: object) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{ 
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>

        {props.children}
    </GlobalContext.Provider>);
}