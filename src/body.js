import amdComponent from './amdComponent.png';
import './body.css'


function Body(){
    return(
      <div className="body">
        <div className="bodyComponent">
          <img src={amdComponent} id="bodyPhoto" alt="Foto de un componente" />

          <p className="bodyText">Somos el soporte de AMD <br /><button id="buttonRegister">Entrar</button></p>
          
        </div>
      </div>
    );
}

export default Body;
