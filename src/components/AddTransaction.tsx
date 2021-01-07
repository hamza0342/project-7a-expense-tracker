import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';


interface enterTransaction{
    id: number;
    text: string;
    amount: number
}

export const AddTransaction = () => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState<string>("0.00");

    const {addTransaction} = useContext(GlobalContext); 

    const onSubmit = (e: any) => {
        e.preventDefault();

        const newTransaction: enterTransaction = {
            id: Math.floor(Math.random() *100000000),
            text: text,
            amount: +amount
        }

       addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text...." />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)
                    </label>
                    <input type="text" value={amount} onChange={(e)=> setAmount((e.target.value))} placeholder="Enter amount..."></input>

                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
