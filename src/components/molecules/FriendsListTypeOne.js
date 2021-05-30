import {
  Badge,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

const FriendsListTypeOne = ({ friends }) => {
  return (
    <ListGroup horizontal>
      {friends instanceof Array &&
        friends?.map((item, index, array) => {
          return (
            <ListGroupItem className="justify-content-between" key={index}>
              <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
              <Badge pill>{index}</Badge>
              <ListGroupItemText>
                <span>owed: {item.owed}</span>
                <br />
                <span>owes: {item.owes}</span>
              </ListGroupItemText>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
};
