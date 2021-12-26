import './SignUp.css';
import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function SignUp(){

  const history = useHistory();

  const [ formData, setFormData ] = useState({
    username: "",
    password: "",
    email: ""
  })

  const handleSubmit = e => {
    e.preventDefault();
    console.log('form enviado');
    const url = '/Usuario';
    axios.post(url, formData)
      .then(res => {
        console.log(res.data);
        history.push('/Usuario');
      })
      .catch(err => {
        console.log(err);
        history.push('/signup');
        alert('This username is already taken or the username is empty \nPlease enter a valid username!');
      });    
    };

  return(
    <div className="div_form">
      <form onSubmit={handleSubmit} action="" className="formulario">
        <h1 className="formulario__titulo">Sign Up</h1>

        <label 
          htmlFor="username" 
          className="formulario__label">
            Username
        </label>
        <input
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
          value={formData.username}  
          type="text"
          name="username"
          placeholder="Joey Tribbiani"
          className="formulario__input"
        />
        <label 
          htmlFor="password"
          className="formulario__label">
            Password
        </label>
        <input 
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          value={formData.password}
          type="password"
          name="password"
          placeholder="Password"
          className="formulario__input"
        />
        <label 
          htmlFor="email"
          className="formulario__label">
            Email
        </label>
        <input  
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          value={formData.email}
          type="email"
          name="email"
          placeholder="joeytribbiani@gmail.com"
          className="formulario__input"
        />
        <input 
          type="submit" 
          value="Submit" 
          className="formulario__submit"
        />    
            
        <div class="botonazul">
          <p><Link to="/" className="cuenta" >Go back</Link></p>
          <p><Link to="./login" className="back">Already have an account?</Link></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;