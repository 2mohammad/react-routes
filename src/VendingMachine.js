import React from "react";
import { BrowserRouter, Route, Link , NavLink} from 'react-router-dom';
import Chips from './Chips'

const VendingMachine = () => {
    return (
        <>

        <h1><Link to="/Chips">Chips</Link></h1>

        <h2>Hello MD</h2>
        
        </>
    )
}

export default VendingMachine;