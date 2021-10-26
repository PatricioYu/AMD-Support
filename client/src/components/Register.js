import './Register.css';
import amdpng from './amdpng.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Register(){
    return(
    
    <div className="div_form">
        <form action="" className="formulario">
        <h1 className="formulario__titulo">Register</h1>

        <label for="" className="formulario__label">Username</label>
        <input type="text" className="formulario__input"/>
        <label for="" className="formulario__label">Password</label>
        <input type="password" className="formulario__input"/>
        <input type="submit" value="Submit" className="formulario__submit" />
        
        <div class="botonazul">
            <p><Link to="/" className="cuenta" >Go Back</Link></p>
            <p><Link to="./login" className="back">Already have an account?</Link></p>
        </div>
        </form>
    </div>
    
    );
}

export default Register;