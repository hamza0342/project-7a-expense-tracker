import React from 'react';
import {configureNotification} from '../services/firebaseService';
import '../App.css';

export const Header = () => {
    return (
        <div>
        <button className="confi" onClick = {configureNotification}>Click Me to enable notifications</button>
        
        <h2>     
            Expense Tracker
        </h2>
        </div>  
    )
}
