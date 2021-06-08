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
  const [initialState, setState] = useState(props);

  // modal functions
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => {
    console.log("did mount");
  }, []);

  return (
    <React.Fragment>
      <h1>Welcome</h1>
      {/* <Center>
        <StopWatch />
      </Center> */}

      <Center>
        <Button color="info" onClick={toggle}>
          LazyStopWatch
        </Button>
      </Center>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <Suspense fallback={<div>Loading...</div>}>
            <LazyStopWatch />
          </Suspense>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default App;
