import logo from './logo.svg';
import {React, useState} from "react"
import './App.css';
import { BrowserRouter, Route, Link , NavLink, Switch} from 'react-router-dom';

import VendingMachine from './VendingMachine'
import Chips from './Chips'
import Soda from './Soda'
import Sardines from './Sardines'

function App() {
  const [VendingMachineState, setVendingMachineState] = useState(true);
  const changeState = () => {
    setVendingMachineState(VendingMachineState => !VendingMachineState)
  }
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <VendingMachine />
            </Route>
            <Route path="/soda" exact>
              <Soda />
            </Route>
            <Route path="/chips" exact>
              <Chips />
            </Route>
            <Route path="/sardines" exact>
              <Sardines />
            </Route>
          </Switch>
        </BrowserRouter>
      );
      }

export default App;
