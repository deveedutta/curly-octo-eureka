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
    startTime: props.startTime || "00:00:00",
    run: false,
  };

  const [initialState, setState] = useState({
    ...props,
    ...defaultState,
  });
  const clockStoreContext = useContext(ClockStoreContext);

  useEffect(() => {
    // console.log("did mount");
  }, []);

  return (
    <div className="StopWatch">
      <ClockStore>
        <ClockStoreContextConsumer>
          {({ startTimer, stopTimer, lapTimer, resetTimer, outTime, ot }) => {
            return (
              <React.Fragment>
                <LargeDisplay
                  outTime={outTime}
                  // startTime={initialState.startTime}
                />

                <ButtonGroup className="ButtonGroup">
                  <Button
                    className="foo"
                    onClick={() => {
                      startTimer();
                      // startAnalytics && startAnalytics();
                      setState({
                        ...initialState,
                        run: true,
                      });
                    }}
                  >
                    Start
                  </Button>
                  <Button
                    onClick={() => {
                      stopTimer();
                      setState({
                        ...initialState,
                        run: true,
                      });
                    }}
                  >
                    Stop
                  </Button>
                  <Button
                    onClick={() => {
                      lapTimer();
                      setState({
                        ...initialState,
                        run: true,
                      });
                    }}
                  >
                    Lap
                  </Button>
                  <Button
                    onClick={() => {
                      resetTimer();
                      setState({
                        ...initialState,
                        run: true,
                      });
                    }}
                  >
                    Reset
                  </Button>
                </ButtonGroup>
              </React.Fragment>
            );
          }}
        </ClockStoreContextConsumer>
      </ClockStore>
    </div>
  );
};

export default StopWatch;
