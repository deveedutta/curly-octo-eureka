import React, { useEffect } from "react";

import "./LargeDisplay.css";

const LargeDisplay = ({ startTime, outTime, ...rest }) => {
  let currentTime = outTime; // || startTime || "00:00:00";

  useEffect(() => {
    // console.log("did mount: LargeDisplay");
  }, []);

  return (
    <div className="LargeDisplay" {...rest}>
      {currentTime}
    </div>
  );
};

export default LargeDisplay;
