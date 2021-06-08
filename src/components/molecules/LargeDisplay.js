import React, { useState, useEffect } from "react";

const LargeDisplay = (props) => {
  const defaultState = {
    onClick: () => {},
  };
  const [initialState, setState] = useState({
    ...props,
    startTime: "00:00:00",
    currentTime: "00:00:00",
  });

  const { startTime, currentTime, children, className, disabled, onClick } =
    initialState;

  useEffect(() => {
    console.log("did mount");
  }, []);

  return <div {...props}>{currentTime}</div>;
};

export default LargeDisplay;
