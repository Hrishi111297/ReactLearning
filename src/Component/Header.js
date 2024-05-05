import { Logo_Url } from "../constant";
const Header = () => {return (
    <div className="header">
    <div className="logo-con">
      <img  className="logo" src={ Logo_Url }/>
    </div>
  
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us </li>
        <li>Contact Us</li>
        <li>cart</li>
      </ul>
    </div>
    </div>
  )}
  export default Header;
  