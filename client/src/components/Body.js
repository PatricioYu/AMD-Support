import './Body.css'
import amdComponent from './amd.gif';
import back from './back.jpg'
import flecha from './flecha-hacia-abajo.png';
import {Link} from 'react-router-dom';
import React from 'react';

function Body() {
    return (
      <section className="mainsection">
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
        <span class="flecha">
        <a href="#footer">
          <svg
            width="100"
            height="50"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 1">
              <path
                fill="currentColor"
                id="lineas (Stroke)"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6145 1.68161C18.7903 1.46869 19.1055 1.43864 19.3184 1.61448L50.4769 27.3474L80.6757 1.6194C80.8859 1.44032 81.2015 1.46554 81.3806 1.67574C81.5597 1.88595 81.5345 2.20152 81.3243 2.3806L50.8061 28.3806C50.6215 28.5379 50.3505 28.54 50.1635 28.3855L18.6816 2.38552C18.4687 2.20968 18.4386 1.89453 18.6145 1.68161Z"
                fill="white"
              />
              <path
                fill="currentColor"
                id="lineas (Stroke)_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6145 11.6816C18.7903 11.4687 19.1055 11.4386 19.3184 11.6145L50.4769 37.3474L80.6757 11.6194C80.8859 11.4403 81.2015 11.4655 81.3806 11.6757C81.5597 11.8859 81.5345 12.2015 81.3243 12.3806L50.8061 38.3806C50.6215 38.5379 50.3505 38.54 50.1635 38.3855L18.6816 12.3855C18.4687 12.2097 18.4386 11.8945 18.6145 11.6816Z"
                fill="white"
              />
              <path
                fill="currentColor"
                id="lineas (Stroke)_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6145 21.6816C18.7903 21.4687 19.1055 21.4386 19.3184 21.6145L50.4769 47.3474L80.6757 21.6194C80.8859 21.4403 81.2015 21.4655 81.3806 21.6757C81.5597 21.8859 81.5345 22.2015 81.3243 22.3806L50.8061 48.3806C50.6215 48.5379 50.3505 48.54 50.1635 48.3855L18.6816 22.3855C18.4687 22.2097 18.4386 21.8945 18.6145 21.6816Z"
                fill="white"
              />
            </g>
          </svg>
        </a>
      </span>
      </section>
      
     
      
   
      

    );
  }

export default Body;
  