import React, { useState, useEffect } from "react";
import "./ButtonGroup.css";

export const ButtonGroup = (props) => {
  const defaultState = {
    onClick: () => {},
  };
  const [initialState, setState] = useState(props);

  const { children, className, disabled, onClick } = initialState;

  useEffect(() => {
    console.log("did mount: ButtonGroup");
  }, []);

  return (
    <ul className={`${className} button-group`} {...props}>
      {children?.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default ButtonGroup;
