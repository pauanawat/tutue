import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './component/login/Login';
import "antd/dist/antd.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router exact path={'/'}>
            <Login />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
