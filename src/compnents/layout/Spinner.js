import spinner from "./spinner.gif";

const Spinner = () => (
  <div style={{ margin: "auto" }}>
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: "200px", margin: "auto", display: "block" }}
    />
  </div>
);

export default Spinner;
