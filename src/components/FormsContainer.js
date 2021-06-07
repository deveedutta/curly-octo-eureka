import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import GenericForm from "./molecules/GenericForm";
import GenericFormTwo from "./molecules/GenericFormTwo";
import useTwoWay from "../hooks/useTwoWay.js";
import FormAddNew from "./molecules/FormAddNew";

const GenericEventHandler = (event) => {
  console.log(event);
  toast.info("event", event);
};
export const FormWrapper = (props) => {
  return (
    <div onClick={() => {}}>
      {/* <GenericForm /> */}
      <GenericFormTwo />
      {/* <FormAddNew /> */}
      <ToastContainer />
    </div>
  );
};

export default FormWrapper;
