import React from "react";

function Invoice() {
  let rowstyle = {
    backgroundColor: "#EAE7E2",
    border: "none",
    textAlign: "center",
  };
  let thead = {
    backgroundColor: "#C7E5F0",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    height: "30px",
  };
  let button = {
    backgroundColor: "#C7E5F0",
    textAlign: "center",
    color: "black",
    fontSize: "18px",
    height: "50px",
    maxHeight: "50px",
    width: "100%",
    maxWidth: "300px",
  };
  return (
    <div className="container">
      <h1 className="text-center">สถานะการชำระเงิน</h1>
      {/* <div className="" style={{ backgroundColor: "#C7E5F0" }}> */}
      <div className="table-responsive mt-3">
        <table className="table table-hover align-middle table-borderless">
          <thead style={thead}>
            <tr>
              <th scope="col">เดือน</th>
              <th scope="col">สถานะ</th>
              <th scope="col">วันที่ชำระเงิน</th>
            </tr>
          </thead>
          <tbody style={rowstyle}>
            <tr>
              <th scope="row">04/2021</th>
              <td>ยังไม่ได้ชำระเงิน</td>
              <td>-</td>
            </tr>
            <tr>
              <th scope="row">03/2021</th>
              <td>ชำระเงินแล้ว</td>
              <td>30/03/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" className="btn mt-3" style={button}>
        Make a payment
      </button>
    </div>
  );
}
export default Invoice;
