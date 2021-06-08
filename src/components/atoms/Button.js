import React, { useState, useEffect } from "react";
import "./Button.css";

export const Button = (props) => {
  const defaultState = {
    onClick: () => {},
  };
  const aria = {
    ariaPressed: false,
    // aria-expanded
  };
  const [initialState, setState] = useState({
    ...{ defaultState },
    ...props,
    ...aria,
  });

  const { children, className, disabled, onClick } = initialState;

  const ariaOnClick = (e) => {
    setState({
      ...initialState,
      ...{
        ariaPressed: true,
      },
    });
    onClick && onClick(e);
  };

  useEffect(() => {
    console.log("did mount: Button");
  }, []);

  return (
    <button
      {...props}
      tabindex="0"
      // role="button"
      disabled={disabled}
      aria-pressed={initialState.ariaPressed}
      className={`${className || ""} button`}
      onClick={ariaOnClick}
    >
      {children || `Button`}
      {/* Pressed: */}
      {/* ,{initialState.ariaPressed ? "true" : "false"} */}
    </button>
  );
};

export default Button;
