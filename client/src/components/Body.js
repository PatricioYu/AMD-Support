import './Body.css'
import amdComponent from './flusha.gif'
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
            <h1>AMD's Support</h1>
              <b>Sorry for all the problems! <br/> Let us know about them once you are registered.</b>
              <Link to="/register" class="btnNeon">
                <span id="span1"></span>
                <span id="span2"></span>
                <span id="span3"></span>
                <span id="span4"></span>
                Register
              </Link>
          </div>
        </div>
      </section>   
    );
  }

export default Body;
  