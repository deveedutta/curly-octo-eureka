import { Spinner, Card } from "reactstrap";

export const Loader = () => {
  return (
    <Card
      style={{
        padding: "1rem",
      }}
    >
      <Spinner className="d-flex align-self-center" />
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

export default Loader;
