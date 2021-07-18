import React from "react";

function ShowRoomAmount() {
  let ShowAmountCard = {
    backgroundColor: "#FFFFFF",
    border: "none",
    textAlign: "center",
    maxWidth: "400px",
    maxHeight: "160px",
    borderRadius: "10px",
    height: "50%",
  };
  return (
    <div>
      <div
        className="p-3 border"
        style={{
          backgroundColor: "#C7E5F0",
          maxWidth: "450px",
          maxHeight: "400px",
        }}
      >
        <div className="mb-4 pt-3" style={ShowAmountCard}>
          <h3 className="fw-bold">Amount of Room Available</h3>
          <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
            100
            <span style={{ fontSize: "40px", fontWeight: "normal" }}>
              rooms
            </span>
          </p>
        </div>
        <div className="pt-3" style={ShowAmountCard}>
          <h3 class="fw-bold">Amount of Room Not Available</h3>
          <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
            100
            <span style={{ fontSize: "40px", fontWeight: "normal" }}>
              rooms
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ShowRoomAmount;
