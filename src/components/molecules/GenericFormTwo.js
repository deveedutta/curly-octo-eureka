import React from "react";
import { useFormik } from "formik";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

const GenericFormTwo = (props) => {
  const initialValues = {
    exampleEmail: "email@domain.com",
    examplePassword: "",
    exampleAddress: "",
    exampleCity: "",
    exampleState: "",
    exampleZip: "",
    exampleCheck: "",
  };

  const onSubmit = (values) => {
    alert();
    console.log("Form Values", formik.values);
    console.log("Form Errors", formik.errors);
    console.log("====Values", values);
  };

  const validate = (values) => {
    let errors = {
      // exampleEmail: "",
      // examplePassword: "",
      // exampleAddress: "",
      // exampleCity: "",
      // exampleState: "",
      // exampleZip: "",
      // exampleCheck: "",
    };

    let pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (values.exampleEmail === "email@domain.com") {
      errors.exampleEmail = "Need to replace the default email";
    }
    if (!pattern.test(values.exampleEmail)) {
      errors.exampleEmail = "Invalid Email format";
    }

    // if (!values.examplePassword) {
    //   errors.examplePassword = "Required";
    // }
    // if (!values.exampleAddress) {
    //   errors.exampleAddress = "Required";
    // }
    // if (!values.exampleCity) {
    //   errors.exampleCity = "Required";
    // }
    // if (!values.exampleState) {
    //   errors.exampleState = "Required";
    // }
    // if (!values.exampleCheck) {
    //   errors.exampleCheck = "Required";
    // }
    // values.examplePassword: "",
    // values.exampleAddress: "",
    // values.exampleCity: "",
    // values.exampleState: "",
    // values.exampleZip: "",
    // values.exampleCheck: "",

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="exampleEmail"
              id="exampleEmail"
              placeholder="with a placeholder"
              onChange={formik.handleChange}
              value={formik.values.exampleEmail}
            />
          </FormGroup>
          {formik.errors.exampleEmail ? formik.errors.exampleEmail : ""}
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="examplePassword"
              id="examplePassword"
              placeholder="password placeholder"
              onChange={formik.handleChange}
              value={formik.values.examplePassword}
            />
          </FormGroup>
          {formik.errors.examplePassword}
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input
          type="text"
          name="exampleAddress"
          id="exampleAddress"
          placeholder="1234 Main St"
          onChange={formik.handleChange}
          value={formik.values.exampleAddress}
        />
      </FormGroup>
      {formik.errors.exampleAddress}
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input
          type="text"
          name="address2"
          id="exampleAddress2"
          placeholder="Apartment, studio, or floor"
          onChange={formik.handleChange}
          value={formik.values.exampleAddress2}
        />
      </FormGroup>
      {formik.errors.exampleAddress2}
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              type="text"
              name="exampleCity"
              id="exampleCity"
              onChange={formik.handleChange}
              value={formik.values.exampleCity}
            />
          </FormGroup>
          {formik.errors.exampleAddress2}
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input
              type="text"
              name="exampleState"
              id="exampleState"
              onChange={formik.handleChange}
              value={formik.values.exampleState}
            />
          </FormGroup>
          {formik.errors.exampleAddress2}
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input
              type="text"
              name="exampleZip"
              id="exampleZip"
              onChange={formik.handleChange}
              value={formik.values.exampleZip}
            />
          </FormGroup>
          {formik.errors.exampleAddress2}
        </Col>
      </Row>
      <FormGroup check>
        <Input
          type="checkbox"
          name="exampleCheck"
          id="exampleCheck"
          onChange={formik.handleChange}
          value={formik.values.exampleCheck}
        />
        <Label for="exampleCheck" check>
          Check me out
        </Label>
      </FormGroup>
      {formik.errors.exampleAddress2}
      <Button type="submit" onClick={formik.onSubmit}>
        Sign in
      </Button>

      <br />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default GenericFormTwo;
