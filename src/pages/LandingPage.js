import React, { useState, useEffect } from "react";
import UserService from "../services/user-service";

const LandingPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  const buttonstyle = {
    backgroundColor: "#C7E5F0",
    color: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "300px",
    width: "90%",
    maxHeight: "50px",
    height: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div className="container-fluid" style={{ height: "250px" }}>
      <h1 className="text-center">Join with Adorminis today!</h1>
      <a
        href="/register"
        className="btn mt-4"
        role="button"
        style={buttonstyle}
      >
        Join now
      </a>
      <a href="/login" className="btn mt-4" role="button" style={buttonstyle}>
        Login
      </a>
      <div className="web-content"></div>
    </div>
  );
};
export default LandingPage;
