import '../components/Register.css';
import amdpng from './amdpng.png';


function Register(){
    return(
    
    <div className="div_form">
        <form action="" class="formulario">
        <h1 class="formulario__titulo">Registrate</h1>
        <label for="" class="formulario__label">Nombre</label>
        <input type="text" class="formulario__input"/>
        <label for="" class="formulario__label">Apellido</label>
        <input type="text" class="formulario__input"/>
        <label for="" class="formulario__label">Usuario</label>
        <input type="text" class="formulario__input"/>
        <label for="" class="formulario__label">Contraseña</label>
        <input type="password" class="formulario__input"/>
        <input type="submit" class="formulario__submit"/>
        
        <div class="botonazul">
            <p><a class="cuenta" href="../index.html">Volver</a></p>
            <p><a class="volver" href="./">¿Ya tenes cuenta?</a></p>
        </div>
        </form>
    </div>
    );
}

export default Register;