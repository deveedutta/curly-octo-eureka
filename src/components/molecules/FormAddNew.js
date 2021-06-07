import React from "react";
import { useFormik } from "formik";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

export const FormAddNew = (props) => {
  // manage the form states
  // handling form submissions
  // validation and error messages
  const formik = useFormik({});
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

export default FormAddNew;
