import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    return(
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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