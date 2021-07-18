import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Room.css";
import ShowRoomAmount from "../components/Room/ShowRoomAmount";
function Room(props) {
  const [data, SetData] = useState([]);
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
  let formcontent = {
    backgroundColor: "#EAE7E2",
    maxWidth: "400px",
    width: "90%",
    maxHeight: "500px",
    border: "none",
    textAlign: "center",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  useEffect(() => {
    Axios.get("http://www.localhost:3001/")
      .then((res) => {
        console.log(res);
        SetData(res.data);
      })
      .catch((err) => {
        console.log(err);
      }, []);
  });

  return (
    <div className="container">
      <h1>Room Status</h1>
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
        <div className="row gx-4">
          <div className="col-7">
            <div className="border">
              <div className="table-responsive">
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
                                  <div className="modal-body">
                                    <div
                                      className="container col-10 mb-3 pt-2 pb-3"
                                      style={{ backgroundColor: "#EAE7E2" }}
                                    >
                                      <div className="row">
                                        <div className=""></div>
                                        <h6>Room 101</h6>
                                        <p>Name</p>
                                        <p>Lastname</p>
                                        <p>Telephone no.</p>
                                        <p>Gender</p>
                                        <p>วันเริ่มสัญญา</p>
                                        <p>วันสิ้นสุดสัญญา</p>
                                        <p>วันที่เข้าพัก</p>
                                      </div>
                                    </div>
                                  </div>
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
                                    <h4
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Resident Code
                                    </h4>
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
                                        {/* <label
                                          htmlFor="message-text"
                                          className="col-form-label"
                                        >
                                          Resident Code:
                                        </label> */}
                                        <textarea
                                          className="form-control"
                                          id="message-text"
                                          placeholder="Please enter your resident code here..."
                                        ></textarea>
                                        <p>
                                          <a
                                            href="http://localhost:3000/addresident/nocode"
                                            target="_blank"
                                          >
                                            No resident code?
                                          </a>
                                        </p>
                                      </div>
                                    </form>
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
                                      <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <h4
                                              className="modal-title"
                                              id="addinfoModalLabel"
                                            >
                                              Resident Information
                                            </h4>
                                          </div>

                                          <div className="modal-body">
                                            <h6> Personal Information</h6>
                                            <div
                                              className="form-content"
                                              style={formcontent}
                                            >
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  Firstname
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="Donnaya"
                                                  aria-label="Disabled input example"
                                                  disabled
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  Lastname
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="Wangwongwatana"
                                                  aria-label="Disabled input example"
                                                  disabled
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  ID Card
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="1234567890123"
                                                  aria-label="Disabled input example"
                                                  disabled
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  Tel No.
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="087-766-7777"
                                                  aria-label="Disabled input example"
                                                  disabled
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  Gender
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="name@example.com"
                                                  aria-label="Disabled input example"
                                                  disabled
                                                />
                                              </div>
                                            </div>
                                            <h6> Additional Information</h6>
                                            <div
                                              className="form-content"
                                              style={formcontent}
                                            >
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  วันเริ่มสัญญา
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="name@example.com"
                                                  aria-label="Disabled input example"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  วันที่เข้าพัก
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="name@example.com"
                                                  aria-label="Disabled input example"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label
                                                  for="exampleFormControlInput1"
                                                  className="form-label"
                                                >
                                                  วันที่เข้าพัก
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  id="exampleFormControlInput1"
                                                  placeholder="name@example.com"
                                                  aria-label="Disabled input example"
                                                />
                                              </div>
                                            </div>
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
            <ShowRoomAmount />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room;
