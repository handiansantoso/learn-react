import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

export const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    return(
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li><button className="btn-login" onClick={() => {
            if(btnText === 'Login')
                setBtnText('Logout');
            else
                setBtnText('Login');
          }}>{btnText}</button></li>
        </ul>
      </div>
    </div>);
}

export default Header;