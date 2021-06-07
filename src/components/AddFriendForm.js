import React, { useState } from "react";

import useTwoWay from "../hooks/useTwoWay.js";
import FormAddNew from "../components/molecules/FormAddNew";
import Loader from "./atoms/Loader";

const AddFriendForm = (props) => {
  const { shouldShowForm } = useTwoWay(false);
  return (
    <React.Fragment>
      {shouldShowForm ? (
        <FormAddNew {...props} shouldShowForm={shouldShowForm} />
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default AddFriendForm;
