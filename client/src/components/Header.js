import './Header.css';
import logoAmd from './logoAmd.png';

function App() {
  return ( 
    <div className="header">
      <img src={logoAmd} className="logo" id="headerLogo" alt="Logo del Header" />
      <div className="verticleLine"></div>
    </div> 
  );
}

export default App;
