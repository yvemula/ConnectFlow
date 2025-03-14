import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import  Button  from "./Button";
import "./Navbar.css";
const logo_light = "/logo-black.png";
const logo_dark = "/logo-white.png";
const search_icon_light = "/search-w.png";
const search_icon_dark = "/search-b.png";
const toggle_light_icon = "/night.png";
const toggle_dark_icon = "/day.png";
const logo = "/ConnectFlow_Cropped.png";

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <div className='navbar'>
            <img src ={logo} alt="" className='logo'/>
            
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search'/>
                <img src ={theme === 'light' ? search_icon_light : search_icon_dark} alt=""/>
            </div>

            <img onClick={()=>{toggle_mode()}}src={theme == 'light' ? toggle_light_icon: toggle_dark_icon} 
            alt="" className='toggle-icon'/>
        </div>
    )
}

export default Navbar;
