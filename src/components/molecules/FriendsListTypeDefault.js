import {
  Badge,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

export const FriendsListTypeDefault = (props) => {
  let { friends } = props;

  return (
    <div
      style={{
        background: "#eeeeee",
      }}
    >
      <h1>Friends: {friends.length}</h1>
      {/* <p>{JSON.stringify(friends)}</p> */}
      {/* <p>{JSON.stringify(friends[0])}</p> */}

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
    </div>
  );
};
export default FriendsListTypeDefault;
