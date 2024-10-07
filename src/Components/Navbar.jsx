import logo from "../assets/logo.png";
import "../Styles/Navbar.css";
import { FaGlobe } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="">Stays</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
        </ul>
      </div>
      <div className="user">
        <p className="para">Airbnb your home</p>
        <span className="glob">
          <FaGlobe size={16} />
        </span>
        <div className="menu">
          <FaBars />
          <FaUser className="user-icon" size={30} color="white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
