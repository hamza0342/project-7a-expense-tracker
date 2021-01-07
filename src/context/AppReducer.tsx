import {contextProps} from './GlobalState';

interface Action {
    type: string;
    payload: any
}
export default (state: contextProps, action: Action) => {
    switch(action.type){
        case 'DELETE': {
            return {
                ...state, 
                transactions: state.transactions.filter((transaction: any) => transaction.id !== action.payload)
            }
        }

        case 'ADD': {
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        }

        default:
            return state;
    }
}