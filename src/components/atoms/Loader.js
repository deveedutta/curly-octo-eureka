import { Spinner, Card } from "reactstrap";

export const Loader = (props) => {
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

export default Loader;
