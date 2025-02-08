import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

// Define button styles and sizes
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type = "button", onClick, buttonStyle, buttonSize }) => {
  // Validate button style
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  // Validate button size
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    </Link>
  );
};

// Export as default
export default Button;
