import '../components/Register.css';
import amdpng from './amdpng.png';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function Register(){
    return(
    
    <div className="div_form">
        <form action="" className="formulario">
        <h1 className="formulario__titulo">Registrate</h1>
        <label for="" className="formulario__label">Nombre</label>
        <input type="text" className="formulario__input"/>
        <label for="" className="formulario__label">Apellido</label>
        <input type="text" className="formulario__input"/>
        <label for="" className="formulario__label">Usuario</label>
        <input type="text" className="formulario__input"/>
        <label for="" className="formulario__label">Contraseña</label>
        <input type="password" className="formulario__input"/>
        <input type="submit" className="formulario__submit"/>
        
        <div class="botonazul">
            <p><a className="cuenta" href="../index.html">Volver</a></p>
            <p><Link to="./login" className="volver">¿Ya tenes cuenta?</Link></p>
        </div>
        </form>
    </div>
    
    );
}

export default Register;