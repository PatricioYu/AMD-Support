import './Footer.css';

function Footer (){
  return(
    <div className="lastHeader" id="footer">
        <div className="divLine1">
          <div className="Links"> 
            <button className="css-button-arrow--black" href="#">About us</button>
            <button className="css-button-arrow--black" href="#">Home</button>
            <button className="css-button-arrow--black" href="#">Language</button>
            <button className="css-button-arrow--black" href="#">Products</button>
          </div> 
          <div className="Line1"></div>
          <div className="Line2"></div>
        </div>

        <div className="divLine2">
          <div className="divDerechos">
            <p>©2021 Advanced Micro Devices, Inc</p>
          </div>
        </div>  
    </div>
  );
}

export default Footer;