import React, { useState } from "react";
import {
  FormGroup,
  Form,
  Label,
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Spinner,
  Card,
} from "reactstrap";

import AddFriendForm from "./AddFriendForm";
import GenericForm from "./molecules/GenericForm";
import GenericFormTwo from "./molecules/GenericFormTwo";
import useTwoWay from "../hooks/useTwoWay.js";

// import img from "./0_yNMBXw8yiieWA15T.png";
import img from "../android-v3-home.png";
// import { FriendsListTypeDefault as FriendsList } from "./molecules/FriendsListTypeDefault";
// import { FriendsListTypeOne as FriendsList } from "./molecules/FriendsListTypeOne";
// import { FriendsListTypeTwo as FriendsList } from "./molecules/FriendsListTypeTwo";
import { FriendsListTypeThree as FriendsList } from "./molecules/FriendsListTypeThree";
import { TabViewOne as Tabs } from "./molecules/TabViewOne";

const Loader = (props) => {
  const { shouldShowForm } = useTwoWay(false);

  return (
    <Card
      style={{
        padding: "1rem",
      }}
    >
      <Spinner className="d-flex align-self-center" style={{}} />
      <div
        style={{
          fontSize: "36px",
        }}
      >
        Loading..
      </div>
    </Card>
  );
};

const NoContent = (props) => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        height: "100vh",
        padding: "20vh",
      }}
    >
      <h2 className="text-muted" style={{ opacity: "0.2", fontSize: "10vh" }}>
        No Content to show
      </h2>
    </div>
  );
};

const FormWrapper = (props) => {
  return (
    <React.Fragment>
      <GenericForm />
      <GenericFormTwo />
      <FormAddNew />
    </React.Fragment>
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

export const MainContainer = (props) => {
  const {
    shouldShowForm,
    state: { loading, friends, total, owes, owed },
  } = useTwoWay(false);

  let tabContent = [
    {
      el: <FormWrapper />,
      title: "Form Validation",
      subTitle: "Formik",
      color: "#576",
    },
    {
      el: <FriendsList friends={friends} filter={2} />,
      title: "Total Balance",
      subTitle: total ?? "0.00",
      color: "#0d6efd",
    },
    {
      el: <FriendsList friends={friends} filter={0} />,
      title: "You owe",
      subTitle: owes ?? "0.00",
      color: "#ff652f",
    },
    {
      el: <FriendsList friends={friends} filter={1} />,
      title: "You're owed",
      subTitle: owed ?? "0.00",
      color: "#75ccb3",
    },
    {
      el: <AddFriendForm />,
      title: "Add a friend",
      subTitle: "Add",
      color: "#333",
    },
    {
      el: <img src={img} />,
      title: "Template",
      subTitle: "Image",
      color: "#5bc5a7",
    },
    {
      el: <NoContent />,
      title: "Placeholder",
      subTitle: "0.00",
      color: "#aaa",
    },
  ];

  const getRandom = (arr) => {
    // return Math.floor(Math.random() * arr.length);
    return arr[Math.floor(Math.random() * arr.length)];
  };

  let colors = [
    "#ff652f",
    "#75ccb3",
    "#ff6731",
    "#f0f0f0",
    "#5bc5a7",
    "#aaaaaa",
  ];

  let myArray = tabContent.map((item, index) => {
    // let color = getRandom(colors);
    let color = colors[index];
    return {
      title: `My Tab ${index}`,
      color,
    };
  });

  return (
    <Container
      style={{
        margin: "5vh auto",
      }}
    >
      <Tabs content={tabContent} nav={tabContent} loading={loading} />
      {loading ? <Loader /> : ""}
      {shouldShowForm ? `${shouldShowForm}` : ""}
      {/* {JSON.stringify(friends)} */}
    </Container>
  );
};

export default MainContainer;
