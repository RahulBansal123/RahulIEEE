import './App.css';
import React from 'react';
import Admin from './Uploader/Upload';
import Home from './Home/Home';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="App__header">
        <div className="Logo">
          <img alt="Logo" src="https://nulliot.com/static/images/null.png" />
        </div>
        <div className="App__navbar">
          <ul>
            <NavLink to="/admin" activeStyle={{ color: '#000' }}>
              Admin
            </NavLink>
            <NavLink to="/home" activeStyle={{ color: '#000' }}>
              Home
            </NavLink>
          </ul>
        </div>
      </div>
      <hr />
      <Switch>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
      <div className="Footer">Made with love❤️ by RAHUL BANSAL!</div>
    </div>
  );
}

export default App;
