import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  const headingStyle = {
    fontSize: "36px",
    margin: "20px 0",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "18px",
    color: "#666",
    marginBottom: "30px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
  };
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#f0f0f0",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="page-not-found">
        <img
          src='https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk='
          alt="404 Not Found"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "20px",
            opacity: "0.8",
            transition: "transform 0.3s ease",
          }}
        />
        {/* <h1 style={{ fontSize: "36px", margin: "20px 0", color: "#333" }}>
          Sorry, Something went wrong!
        </h1> */}
        <p style={paragraphStyle}>
         Sorry, we can't find that page. You'll find lots to explore on the home page. 
        </p>
        <p style={paragraphStyle}>
          <i>{isRouteErrorResponse(error) && error.statusText}</i>
        </p>
        <Link
          to="/home"
          style={{
            color: "white",
            background: "#4d44a1",
            width: "100%",
            padding: "18px",
            fontSize: "18px",
            letterSpacing: "2px",
            textDecoration: "none",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
