import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

// Define button styles and sizes
const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({
  children,
  type = "button",
  onClick,
  buttonStyle,
  buttonSize,
  to, // Optional destination URL
}) => {
  // Validate button style and size
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // The core button element
  const buttonElement = (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );

  // Wrap the button in a Link if a destination is provided
  return to ? (
    <Link to={to} className="btn-mobile">
      {buttonElement}
    </Link>
  ) : (
    buttonElement
  );
};

export default Button;
