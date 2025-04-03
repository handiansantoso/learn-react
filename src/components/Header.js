import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

export const Header = () => {
    const [btnText, setBtnText] = useState('Login');

    return(
    <div className="flex justify-between bg-pink-200 shadow-lg m-2">
      <img src={LOGO_URL} className="w-45"></img>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4"><button className="btn-login" onClick={() => {
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