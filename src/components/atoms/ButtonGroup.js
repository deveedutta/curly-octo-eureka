import React, { useEffect } from "react";
import "./ButtonGroup.css";

export const ButtonGroup = ({ children, className, ...rest }) => {
  useEffect(() => {
    // console.log("did mount: ButtonGroup");
  }, []);

  return (
    <ul className={`${className} button-group`} {...rest}>
      {children?.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  );
};

export default ButtonGroup;
