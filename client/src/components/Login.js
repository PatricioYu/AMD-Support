import './Login.css'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();

    const handleSubmit = e => {
      e.preventDefault();
      console.log('form enviado');
      history.push('/usuario');
    }
  
    return(
      <div className="">
        <div className="div_form">
          <form onSubmit={handleSubmit} action="" className="formulario">
            <h1 className="formulario__titulo">Log In</h1>
            <label for="" className="formulario__label">Username</label>
            <input type="text" className="formulario__input"/>
            <label for="" className="formulario__label">Password</label>
            <input type="password" className="formulario__input"/>
            <input type="submit" value="Submit" className="formulario__submit"/>
            
            <div class="botonazul">
                <p><Link to="/" className="cuenta" >Go Back</Link></p>
                <p><Link to="/signup" className="back">Don't have an account?</Link></p>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Login;