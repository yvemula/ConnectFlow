import React from "react";
import "./Navbar.css";

const logo_light = "/logo-black.png";
const logo_dark = "/logo-white.png";
const search_icon_light = "/search-w.png";
const search_icon_dark = "/search-b.png";
const toggle_light_icon = "/night.png";
const toggle_dark_icon = "/day.png";
const logo = "/ConnectFlow_Cropped.png";

const Navbar = ({ theme, setTheme }) => {
  // Toggle the theme between light and dark modes
  const toggleMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Company Logo" className="logo" />

      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Features</li>
        <li>About</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt="Search Icon"
        />
      </div>

      <img
        onClick={toggleMode}
        src={theme === "light" ? toggle_light_icon : toggle_dark_icon}
        alt="Toggle Theme"
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
