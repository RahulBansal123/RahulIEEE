import React, { useState } from 'react';
import './App.css';
import Cart from './Cart';
import Home from './Home/Home';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const [addCart, setaddCart] = useState([]);
  return (
    <div className="App">
      <div className="App__header">
        <div className="App__navbar">
          <ul>
            <NavLink to="/cart" activeStyle={{ color: '#000' }}>
              Cart
            </NavLink>
            <NavLink to="/home" activeStyle={{ color: '#000' }}>
              Home
            </NavLink>
          </ul>
        </div>
      </div>
      <hr />
      <Switch>
        <Route exact path="/cart">
          <Cart addCart={addCart} setaddCart={setaddCart} />
        </Route>
        <Route exact path="/home">
          <Home addCart={addCart} setaddCart={setaddCart} />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
      <div className="Footer">Made with love❤️ by RAHUL BANSAL!</div>
    </div>
  );
}

export default App;
