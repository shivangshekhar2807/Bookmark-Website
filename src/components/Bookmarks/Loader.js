import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        top: "-35vh", 
      }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "5rem", 
          height: "5rem", 
        }}
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;