import '../components/DivImage.css';
import amdpng from './amdpng.png';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function DivImage (){
  return(
    <div className="div_image">
      <div className="imgdiv">
        <Link to="/">
          <img 
            src={amdpng} 
            className="amd_png" 
            alt="Imagen AMD" 
          />
        </Link>
      </div>
    </div>
  );
}

export default DivImage;