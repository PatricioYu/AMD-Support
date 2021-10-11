import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Body from './Body';
import Lastheader from './Lastheader';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Body/>
    <Lastheader/>
  </React.StrictMode>,
  document.getElementById('root'),
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
