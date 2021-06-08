import React, { useEffect } from "react";

const LargeDisplay = ({ startTime, ...rest }) => {
  let currentTime = startTime || "00:00:00";

  useEffect(() => {
    console.log("did mount: LargeDisplay");
  }, []);

  return <div {...rest}>{currentTime}</div>;
};

export default LargeDisplay;
