import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

export const TransactionList = () => {

    const context = useContext(GlobalContext);
    //console.log(context);
    return (
        <div>
            <h3>Transaction List</h3>
            <ul className="list">
                {context.transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
                
            </ul>

        </div>
    )
}
