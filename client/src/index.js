import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import DivImage from './components/DivImage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Usuario from './components/Usuario';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/app">
        <Header/>
        <Body/>
        <Footer/>
      </Route>

      <Route path="/login">
        <DivImage/>
        <Login/>
      </Route>

      <Route path="/signup">
        <DivImage/>
        <SignUp/>
      </Route>
      
      <Route path="/usuario">
        <Usuario/>
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
