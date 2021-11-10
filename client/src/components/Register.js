import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import amdpng from './amdpng.png';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


const Register = ({ addUser }) => {
    const [users, setUsers] = useState([]);

    // add user
    const addUser = user => {
        axios.post('/users', user)
          .then(res => {
            const newUsers = [res.data, ...users];
            setNotes(newUsers);
        });
    };
    
    // update user
    const updateUser = (id, username, password) => {
        const updatedUser = {
          username: username,
          password: password
        };
        axios.put('/users/' + id, updatedNote)
          .then(res => {
            const newUsers = users.map(user =>
              user.id === id ? updatedUser : user
            );
            setUsers(newUsers);
          });
        };
    
    // delete user
    const removeUser = (id) => {
        axios.delete('/users/' + id)
          .then(res => {
            const newUsers = users.filter(user => user._id !== id);
            setNotes(newUsers);
        });
    };

    const history = useHistory();

    // state hooks para el form
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
      
    // handler para el submit
    const handleSubmit = e => {
        e.preventDefault();
        addUser({
            username: username,
            password: password
        });
        console.log(`El usuario es ${username} y su contraseña es ${password}`);
        history.push('/usuario');
    };

    return(
        <div className="div_form">
            <form onSubmit={handleSubmit} action="" className="formulario">
                <h1 className="formulario__titulo">Register</h1>

                <label for="" className="formulario__label">Username</label>
                <input 
                    type="text"
                    className="formulario__input"
                    type='text'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <label for="" className="formulario__label">Password</label>
                <input 
                    type="password" 
                    className="formulario__input"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Submit" className="formulario__submit"/>
                
                <div class="botonazul">
                    <p><Link to="/" className="cuenta" >Go Back</Link></p>
                    <p><Link to="./login" className="back">Already have an account?</Link></p>
                </div>
            </form>
        </div>
    );
}

export default Register;