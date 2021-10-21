import './Body.css'
import amdComponent from './amdComponent.png'
import back from './back.jpg'
import {Link} from 'react-router-dom';

function Body() {
    return (
      <section className="main">
        <div className="divA">
        <img src={amdComponent} className="amdImg" id="amd image" alt="Imagen AMD" />
        </div>

        <div className="divB">
          <div className="divbTexto">
            <h1>Soporte de AMD</h1>
              <b>Lamentamos que tengas problemas, por favor comentanos tu problema.</b>
              <Link to="/register" class="btnNeon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Entrar
              </Link>
          </div>
        </div>
      </section>   
    );
  }

export default Body;
  