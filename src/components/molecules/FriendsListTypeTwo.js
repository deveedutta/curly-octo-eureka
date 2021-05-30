import React from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

export const FriendsListTypeTwo = ({ friends }) => {
  return (
    <React.Fragment>
      <ListGroup>
        {friends instanceof Array &&
          friends?.map((item, index, array) => {
            return (
              <ListGroupItem
                key={index}
                className="justify-content-between d-flex"
              >
                <img
                  src="http://placehold.it/32x32"
                  alt={`${item.name} - placeholder image`}
                  className="media-object"
                ></img>

                <span className="px-2 h5">{item.name}</span>

                {item.owed ? <span>you owe: {item.owed}</span> : ""}
                {item.owes ? <span>owes you: {item.owes}</span> : ""}
              </ListGroupItem>
            );
          })}
      </ListGroup>
    </React.Fragment>
  );
};

export default FriendsListTypeTwo;
