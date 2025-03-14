import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

const logo = "/ConnectFlow_Cropped.png";
const search_icon_light = "/search-w.png";
const search_icon_dark = "/search-b.png";
const toggle_light_icon = "/night.png";
const toggle_dark_icon = "/day.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="search icon" />
      </div>

      <img
        onClick={toggle_mode}
        src={theme === 'light' ? toggle_light_icon : toggle_dark_icon}
        alt="toggle mode"
        className="toggle-icon"
      />
    </nav>
  );
};

export default Navbar;
