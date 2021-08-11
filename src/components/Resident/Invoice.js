import React from "react";

function Billing() {
  return (
    <div className="container">
      <h1 className="text-center">ใบแจ้งค่าใช้จ่าย</h1>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-4 fs-5">ปี: </div>
        <div className="col-4 fs-5">เดือน:</div>
      </div>
      <div
        className="table-responsive mx-auto"
        style={{ backgroundColor: "#C7E5F0", width: "70%", padding: "15px" }}
      >
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#fff" }}>
                <h5 className="fw-bolder">ชื่อ/Name</h5>
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                นายกอ ขอไข่
              </th>
              <th scope="col" style={{ backgroundColor: "#fff" }}>
                <h5 className="fw-bolder">วันที่/Date</h5>
              </th>
              <th
                scope="col"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                25/07/64
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" style={{ backgroundColor: "#fff" }}>
                <h5 className="fw-bolder">ห้อง</h5>
              </th>
              <td style={{ backgroundColor: "#fff", color: "#16558F" }}>
                A101
              </td>
              <td style={{ backgroundColor: "#fff" }}>
                <h5 className="fw-bolder">ประจำเดือน/Month</h5>
              </td>
              <td style={{ backgroundColor: "#fff", color: "#16558F" }}>
                08/2021
              </td>
            </tr>
            <tr>
              <th scope="row " className="text-center">
                <h6
                  className="fw-bolder p-3"
                  style={{ backgroundColor: "#fff" }}
                >
                  รายการ
                  <br /> (Description)
                </h6>
              </th>
              <td className="text-center">
                <h6
                  className="fw-bolder p-3"
                  style={{ backgroundColor: "#fff" }}
                >
                  จำนวนหน่วย <br />
                  (Units)
                </h6>
              </td>
              <td className="text-center ">
                <h6
                  className="fw-bolder p-3"
                  style={{ backgroundColor: "#fff" }}
                >
                  ราคา/หน่วย <br />
                  (Price/Unit)
                </h6>
              </td>
              <td className="text-center">
                <h6
                  className="fw-bolder p-3"
                  style={{ backgroundColor: "#fff" }}
                >
                  จำนวนเงิน
                  <br />
                  (Amount)
                </h6>
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#fff" }}>
                ค่าเช่า [ส.ค.64]
              </th>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                4,500
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#fff" }}>
                ค่าน้ำประปา [xxx-xxx]
              </th>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                100
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#fff" }}>
                ค่าไฟฟ้า [2558-2642]
              </th>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                84.00
              </td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                8.00
              </td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                672.00
              </td>
            </tr>
            <tr>
              <th scope="row" style={{ backgroundColor: "#fff" }}>
                ค่าอินเทอร์เน็ต [ส.ค.64]
              </th>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              ></td>
              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                200.00
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan="3"
                className="text-center"
                style={{ backgroundColor: "#fff" }}
              >
                <h5 className="fw-bolder">รวมเงินทั้งสิ้น/Grand Total</h5>
              </th>

              <td
                className="text-center"
                style={{ backgroundColor: "#fff", color: "#16558F" }}
              >
                3,688.00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <h1>Room Status</h1>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body"></i>
            </div>
            <div className="col">
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Type to search..."
              ></input>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gx-3">
          <div className="col-7">
            <div className="border">
              <div className="table-responsive rounded">
                <table
                  className="table table-hover align: middle table-borderless"
                  style={{ maxWidth: "800px" }}
                >
                  <thead style={thead}>
                    <tr>
                      <th scope="col">Room No.</th>
                      <th scope="col">Status</th>
                      <th scope="col">Resident Info</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((i) => {
                      return (
                        <tr style={rowstyle}>
                          <th scope="row" key={i.id}>
                            {i.ROOMNO}
                          </th>
                          <td key={i.id}>{i.ALLROOMSTATUSes[0].STATUS}</td>
                          <td key={i.id}>
                            <button
                              type="button"
                              className="btn btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleInfo"
                              data-bs-whatever="@mdo"
                            >
                              Info
                            </button>
                            <div
                              className="modal fade"
                              id="exampleInfo"
                              tabIndex="-1"
                              aria-labelledby="exampleModalInfo"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div
                                    className="modal-header"
                                    style={{ backgroundColor: "#C7E5F0" }}
                                  >
                                    <h5
                                      className="modal-title"
                                      id="exampleModalInfo"
                                    >
                                      Resident Information
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">Information</div>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Ok
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-light"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              data-bs-whatever="@mdo"
                            >
                              Add
                            </button>
                            <div
                              className="modal fade"
                              id="exampleModal"
                              tabIndex="-1"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div
                                    className="modal-header"
                                    style={{ backgroundColor: "#C7E5F0" }}
                                  >
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Resident Code
                                    </h5>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    <form>
                                      <div className="mb-3">
                                        <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Resident Code:
                                        </label>
                                        <textarea
                                          className="form-control"
                                          id="message-text"
                                          placeholder="Please enter your resident code here..."
                                        ></textarea>
                                      </div>
                                    </form>
                                  </div>
                                  <p>No resident code?</p>
                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-bs-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-primary"
                                      data-bs-toggle="modal"
                                      data-bs-target="#addinfomodal"
                                    >
                                      Confirm
                                    </button>
                                    <div
                                      className="modal fade"
                                      id="addinfomodal"
                                      tabIndex="-1"
                                      aria-labelledby="addinfoModalLabel"
                                      aria-hidden="true"
                                    >
                                      <div className="modal-dialog">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h5
                                              className="modal-title"
                                              id="addinfoModalLabel"
                                            >
                                              Resident Information
                                            </h5>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div className="modal-body">
                                            Personal Information Additional
                                            Information
                                          </div>
                                          <div className="modal-footer">
                                            <button
                                              type="button"
                                              className="btn btn-secondary"
                                              data-bs-dismiss="modal"
                                            >
                                              Cancle
                                            </button>
                                            <button
                                              type="button"
                                              className="btn btn-primary"
                                            >
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div
              className="p-3 border"
              style={{ backgroundColor: "#C7E5F0", maxHeight: "400px" }}
            ></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default Billing;
