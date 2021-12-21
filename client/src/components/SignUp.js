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
          .then(res => console.log(res.data))
          .catch(err => console.log(err));   
        history.push('/Usuario');     
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
                    className="formulario__input"/>
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
                    className="formulario__input"/>
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
                    className="formulario__input"/>
                <input 
                    type="submit" 
                    value="Submit" 
                    className="formulario__submit"/>
                
                <div class="botonazul">
                    <p><Link to="/" className="cuenta" >Go back</Link></p>
                    <p><Link to="./login" className="back">Already have an account?</Link></p>
                </div>
            </form>
        </div>
    );
}

export default SignUp;