import React, { useState, useEffect, Suspense } from "react";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

// Generic Components
import { Button, Modal, ModalBody } from "reactstrap";

// Custom Components
import Center from "./components/atoms/Center";
import StopWatch from "./components/StopWatch";

const LazyStopWatch = React.lazy(() => import("./components/StopWatch"));

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

  useEffect(() => {
    console.log("did mount");
  }, []);

  return (
    <React.Fragment>
      <Center>
        <h1>Welcome</h1>
      </Center>

      {/* <Center>
        <StopWatch />
      </Center> */}

      <Center>
        <Button color="info" onClick={toggle}>
          Load LazyStopWatch
        </Button>
      </Center>
      <Modal isOpen={initialState.showModal} toggle={toggle}>
        <ModalBody>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStopWatch />
          </Suspense>
        </ModalBody>
      </Modal>

      <StopWatch />
    </React.Fragment>
  );
};

export default App;
