import React, { useState, useEffect, Suspense } from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Generic Components
import { Button, Modal, ModalBody } from "reactstrap";

import img from "./alarm_on_black_192x192.png";

// Custom Components
import Center from "./components/atoms/Center";
import StopWatch from "./components/StopWatch";
import Loader from "./components/atoms/Loader";

import ServiceWorker from "./ServiceWorker";

const LazyStopWatch = React.lazy(() => import("./components/StopWatch"));
const LazyModal = React.lazy(() => import("./components/MyModal"));
const App = (props) => {
  const defaultState = {
    showModal: false,
  };
  const [initialState, setState] = useState({
    ...props,
    ...defaultState,
  });

  // modal functions

  const toggle = () =>
    setState({
      ...initialState,
      showModal: !initialState.showModal,
    });

  ServiceWorker.register();

  useEffect(() => {
    // console.log("did mount");
  }, []);

  return (
    <React.Fragment>
      <Center>
        <h1>Welcome</h1>
      </Center>
      <Center>
        <img src={img} height="50" width="50" />
      </Center>
      {/* <Center>
        <StopWatch />
      </Center> */}

      <Suspense fallback={<Loader />}>
        <LazyModal isOpen={initialState.showModal} toggle={toggle} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <LazyStopWatch startTime={"00:00:01"} />
      </Suspense>

      <Center>
        <Button color="info" onClick={toggle}>
          Load LazyStopWatch
        </Button>
      </Center>
      <StopWatch />
    </React.Fragment>
  );
};

export default App;
