import React, { useState, useEffect, useContext } from "react";

import "./StopWatch.css";

import LargeDisplay from "./molecules/LargeDisplay";
import Button from "./atoms/Button";
import ButtonGroup from "./atoms/ButtonGroup";

import ClockStore from "../stores/ClockStore";
import {
  ClockStoreContext,
  ClockStoreContextConsumer,
} from "../stores/ClockStore";

const StopWatch = (props) => {
  const defaultState = {
    isRunning: false,
    run: false,
  };

  const [initialState, setState] = useState({
    ...props,
    ...defaultState,
  });
  const clockStoreContext = useContext(ClockStoreContext);

  useEffect(() => {
    console.log("did mount");
  }, []);

  return (
    <ClockStore>
      <ClockStoreContextConsumer>
        {(values) => {
          return (
            <React.Fragment>
              <LargeDisplay startTime={"00:00:01"} />
              <ButtonGroup>
                <Button
                  onClick={() => {
                    alert("1");
                    clockStoreContext.startTimer();
                    setState({
                      ...initialState,
                      run: true,
                    });
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
        }}
      </ClockStoreContextConsumer>
    </ClockStore>
  );
};

export default StopWatch;
