import React, { Suspense } from "react";
import { Modal, ModalBody } from "reactstrap";
import Loader from "./atoms/Loader";

const LazyStopWatch = React.lazy(() => import("./StopWatch"));

export const MyModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Suspense fallback={<Loader />}>
          <LazyStopWatch startTime={"00:00:01"} />
        </Suspense>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
    </Modal>
  );
};

export default MyModal;

{
  /* <Modal isOpen={initialState.showModal} toggle={toggle}> */
}
