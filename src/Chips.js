import React from "react";
import {BrowserRouter, Route, NavLink, Link} from "react-router-dom"
import {useState, useEffect} from "react";
import VendingMachine from './VendingMachine'

const Chips = () => {
    const [chips, setChips] = useState(0)
    const increment = () => {
        setChips(n => n + 1)
    }

    return (
        <>
        <Link to="/">go back</Link>
        <button onClick={increment}>Nom Nom Nom</button>
        <h3>Number of Chips: {chips}</h3>

        </>
    )
}

export default Chips;