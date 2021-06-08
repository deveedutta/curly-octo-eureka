import "./Center.css";

export const Center = ({ children, ...rest }) => {
  return (
    <div {...rest} className={"center"}>
      {children}
    </div>
  );
};

export default Center;
