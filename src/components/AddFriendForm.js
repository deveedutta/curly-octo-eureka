import React, { useState } from "react";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Spinner,
  Card,
} from "reactstrap";

import useTwoWay from "../hooks/useTwoWay.js";

const Loader = (props) => {
  const { shouldShowForm } = useTwoWay(false);

  return (
    <Card
      style={{
        // height: "10vh",
        padding: "1rem",
      }}
    >
      <Spinner className="d-flex align-self-center" style={{}} />
      <div
        style={{
          // height: "10vh",
          fontSize: "36px",
        }}
      >
        Loading..
      </div>
    </Card>
  );
};
const FormAddNew = (props) => {
  const { shouldShowForm } = useTwoWay(false);

  return (
    <Form>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
    </Form>
  );
};

const AddFriendForm = ({ shouldShowForm }) => {
  return (
    <React.Fragment>
      {(shouldShowForm = true ? <FormAddNew /> : "")}
    </React.Fragment>
  );
};

export default AddFriendForm;
