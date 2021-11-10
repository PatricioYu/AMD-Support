import './Header.css';
import logoAmd from './logoAmd.png';
import gente from './gente.png'

function Usuario(){
    return ( 
            <div className="header">
              <div className="icon__div"><img src={gente} className="gente" id="genteicon" alt="icono de gente"/></div>
              <div className="verticleLine"></div>
              <div className="links"><button className="css-button-neumorphic">Shop</button><button className="css-button-neumorphic">Accessories</button><button className="css-button-neumorphic">ODA</button>
              <button className="css-button-neumorphic">Options</button>
              </div>
            </div> 
    );
}

export default Usuario;