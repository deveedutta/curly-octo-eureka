import React from "react";
import { ListGroup, ListGroupItem, Badge, Media } from "reactstrap";

import { FriendsListTypeTwo as FList } from "./FriendsListTypeTwo";

const filters = ["owed", "owes", "all"];

export const FriendsListTypeThree = ({ friends, filter }) => {
  if (!friends instanceof Array) {
    return;
  }

  const key = filters[filter];
  switch (key) {
    case "owed":
      friends = friends.map((item) => {
        return Object.assign({}, item, {
          owes: undefined,
        });
      });
      break;
    case "owes":
      friends = friends.map((item) => {
        return Object.assign({}, item, {
          owed: undefined,
        });
      });
      break;
    case "all":
    default:
      break;
  }

  return <FList friends={friends} />;
};

export default FriendsListTypeThree;
