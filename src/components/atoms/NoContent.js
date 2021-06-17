export const NoContent = (props) => {
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
export default NoContent;
