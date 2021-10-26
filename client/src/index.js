import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Div_image from './components/Div_image';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/login">
        <Div_image/>
        <Login/>
      </Route>

      <Route path="/register">
        <Div_image/>
        <Register/>
      </Route>

      <Route path="/">
        <App/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
