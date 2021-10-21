import '../components/Register.css'





function Register(){
    return(
        <form action="" className="formulario">
            <h1 className="formulario_titulo">Registrate</h1>
            <label for="" className="formulario_label">Nombre</label>
            <input type="text" className="formulario_input"/>
            <label for="" className="formulario_label">Correo</label>
            <input type="text" className="formulario_input"/>
            <label for="" className="formulario_label">Contraseña</label>
            <input type="password" className="formulario_input"/>
            <input type="submit" class="formulario__submit"/>
        </form>
    );
}

export default Register;