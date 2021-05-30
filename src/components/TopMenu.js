import React, { useState } from "react";
import { Button } from "reactstrap";
import "./TopMenu.css";
import useTwoWay from "../hooks/useTwoWay";

const TopMenu = (props) => {
  const { addNew, showForm } = useTwoWay(false);

  const [initialState, setState] = useState({
    createGroupButtonState: false,
  });

  let { createGroupButtonState } = initialState;

  return (
    <ul className="TopMenu">
      <li>
        <Button
          size="lg"
          color="primary"
          onClick={() => {
            showForm(true);
            alert(showForm);
          }}
        >
          +
        </Button>
      </li>
      <li>
        <Button size="lg" color="primary" onClick={addNew}>
          Add Friend
        </Button>
      </li>
      <li>
        <Button
          size="lg"
          color={createGroupButtonState ? "primary" : "muted"}
          disabled={createGroupButtonState}
        >
          Create Group
        </Button>
      </li>
    </ul>
  );
};

export default TopMenu;

// () => {
//   addFriend();
// };
