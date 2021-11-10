import './Usuario.css';
import logoAmd from './logoAmd.png';
import gente from './gente.png'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function Usuario(){
  
  const history = useHistory();

  const onClick = e => {
    e.preventDefault();
    console.log('Has salido');
    history.push('/Register');

  };


    return ( 
            <div className="header_usuario">
              <img src={gente} className="logo" id="headerLogo" alt="Logo del Header" />
              <div className="verticleLine"></div>
              <div className="links"><button className="css-button-neumorphic">Shop</button><button className="css-button-neumorphic">Accessories</button><button className="css-button-neumorphic">ODA</button>
              <button className="css-button-neumorphic">Options</button>
              </div>
              <button className="css-button-neumorphic-salir" onClick={onClick}>Salir</button>
            </div> 
    );
    
}

export default Usuario;