import './Usuario.css';
import gente from './gente.png'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function Usuario(){
  
  const history = useHistory();

  const onClick = e => {
    e.preventDefault();
    console.log('Has salido');
    history.push('/App');

  };

  return ( 
    <div className="header_usuario">
      <img 
        src={gente} 
        className="logo" 
        id="headerLogo" 
        alt="Logo del Header" 
      />
      <div 
        className="verticleLine">
      </div>
      <div className="links">
        <button className="css-button-neumorphic">
          Shop
        </button>
        <button className="css-button-neumorphic">
          Accessories
        </button>
        <button className="css-button-neumorphic">
          Solutions
        </button>
        <button className="css-button-neumorphic">
          Options
        </button>
        <button className="css-button-neumorphic-salir" onClick={onClick}>
          Salir
        </button>
      </div>
    </div> 
  );
}

export default Usuario ;