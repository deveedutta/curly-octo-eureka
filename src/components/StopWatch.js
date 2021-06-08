import React, { useState, useEffect } from "react";

import "./StopWatch.css";

import LargeDisplay from "./molecules/LargeDisplay";
import Button from "./atoms/Button";
import ButtonGroup from "./atoms/ButtonGroup";

const StopWatch = (props) => {
  const [initialState, setState] = useState(props);

  useEffect(() => {
    console.log("did mount");
  }, []);

  return (
    <React.Fragment>
      <LargeDisplay />
      <ButtonGroup>
        <Button
          onClick={() => {
            alert("1");
          }}
        >
          Start
        </Button>
        <Button>Stop</Button>
        <Button>Lap</Button>
        <Button>Reset</Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default StopWatch;
