import { LOGO_URL } from "../utils/constants";

export const Header = () => (
    <div className="header">
      <img src={LOGO_URL} className="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );

export default Header;