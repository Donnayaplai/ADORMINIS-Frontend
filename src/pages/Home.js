import React from "react";
//Landing page
function Home() {
  const buttonstyle = {
    backgroundColor: "#C7E5F0",
    color: "#000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    marginTop: "5px",
    cursor: "pointer",
  };
  return (
    <div className="container-fluid" style={{ height: "250px" }}>
      <div>
        <h1 style={{ marginTop: "10px", textAlign: "center" }}>
          Join with Adorminis today!
        </h1>
        <div class="container d-grid gap-2 col-4 mx-auto">
          <a href="../Signup" class="btn" role="button" style={buttonstyle}>
            Signup
          </a>
          <a href="../Login" class="btn" role="button" style={buttonstyle}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
