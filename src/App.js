import amdLogoV1 from './amdLogoV1.png';
import './App.css';


function App() {
  return(
    <div className="header">
      <img src={amdLogoV1} className="headerItems" id="headerLogo" alt="Logo del Header" />
      <div className="headerItems">About Us</div>
      <div className="headerItems">Products</div>
      <div className="headerItems">Shop</div>
      <div className="headerItems">Language</div>    
    </div>
  );
}

export default App;