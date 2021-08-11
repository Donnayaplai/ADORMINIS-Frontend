import React from "react";
import AdminIcon from "../components/Navbar/images/admin.png";
import ResidentIcon from "../components/Navbar/images/resident.png";
function RoleSelection() {
  const card = {
    maxWidth: "320px",
    width: "90%",
    maxHeight: "320px",
    height: "90%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <div>
      <h1 className="header mt-4">Select your role</h1>
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card">
                <img
                  src={AdminIcon}
                  className="card-img-top"
                  alt="administrator"
                  style={card}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a href="/signup" style={{ color: "#000" }}>
                      Administrator
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <div className="card">
                <img
                  src={ResidentIcon}
                  className="card-img-top"
                  alt="..."
                  style={card}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    <a href="/signup" style={{ color: "#000" }}>
                      Resident
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection;
