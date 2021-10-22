import '../components/Div_image.css';
import amdpng from './amdpng.png';



function Div_image (){
    return(
        <div className="div_image">
        <img src={amdpng} className="amd_png"  alt="Imagen AMD" />
        </div>
    );
}

export default Div_image;