import './Header.css';
import logoAmd from './logoAmd.png';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const onClick = e => {
    e.preventDefault();
    console.log('Log in');
    history.push('/login');
  };

  return ( 
    <div className="header">
      <img 
        src={logoAmd} 
        className="logo" 
        id="headerLogo" 
        alt="Logo del Header" />
      <button className="css-button-neumorphic-login" onClick={onClick}>Log in</button>
    </div> 
  );
}

export default App;
