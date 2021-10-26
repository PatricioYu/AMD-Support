import './Login.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Login(){
    return(
    <div className="">
        <div className="div_form">
        <form action="" className="formulario">
        <h1 className="formulario__titulo">Registrate</h1>
        <label for="" className="formulario__label">Usuario</label>
        <input type="text" className="formulario__input"/>
        <label for="" className="formulario__label">Contraseña</label>
        <input type="password" className="formulario__input"/>
        <input type="submit" className="formulario__submit"/>
        
        <div class="botonazul">
            <p><Link to="/register" className="cuenta" >Volver</Link></p>
        </div>
        </form>
        </div>
    </div>
   
       
    );
}

export default Login;