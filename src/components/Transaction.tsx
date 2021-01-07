import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = (props: any) => {
    const context = useContext(GlobalContext);
    const sign = props.transaction.amount < 0 ? '-' : '+'; 
    return (
        <div>
            <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>{props.transaction.text}
                    <span> {sign}${Math.abs(props.transaction.amount)}</span><button className="delete-btn" onClick={()=> context.deleteTransaction(props.transaction.id)} >x</button>
                </li>
        </div>
    )
}
