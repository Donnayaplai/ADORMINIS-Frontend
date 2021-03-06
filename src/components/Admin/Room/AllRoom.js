import React, { useState, useEffect } from "react";
// import Axios from "axios";
import "./Room.css";

const Room = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["ROOMNO", "STATUS"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  // const [allData, setAllData] = useState([]);
  // const [filteredData, setFilteredData] = useState(allData);

  // const API_URL = "http://localhost:3001/room/100000003";
  // const getRooms = async () => {
  //   await Axios.get(API_URL).then((response) => SetRoom(response.data));
  // };

  // useEffect(() => {
  //   getRooms();
  // }, []);

  let rowstyle = {
    backgroundColor: "#EAE7E2",
    border: "none",
    textAlign: "center",
  };
  // const handleSearch = (event) => {
  //   let value = event.target.value;
  //   let result = [];
  //   console.log(value);
  //   result = allData.filter((data) => {
  //     return data.ROOMNO.search(value) !== -1;
  //   });
  //   setFilteredData(result);
  // };

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/room/100000003")
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllData(response.data);
  //       setFilteredData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }, []);
  // });
  useEffect(() => {
    fetch("http://localhost:3001/room/100000003")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function search(items) {
    return items.filter((item) => {
      if (item.FLOOR == filterParam) {
        return searchParam.some((newItem) => {
          return item[newItem].toString().indexOf(q) > -1;
        });
      } else if (item.STATUS == filterParam) {
        return searchParam.some((newItem) => {
          return item[newItem].toString().indexOf(q) > -1;
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return item[newItem].toString().indexOf(q) > -1;
        });
      }
    });
  }

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="?????????????????????????????????????????????"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{
              border: "1px solid #9ABCDF",
            }}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="floorno"
            className="form-label"
            style={{
              marginLeft: "3%",
            }}
          >
            ????????????:
          </label>

          <select
            className="form-select"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            aria-label="Filter by floor number"
            style={{
              border: "1px solid #9ABCDF",
              maxWidth: "100px",
              width: "100%",
              marginLeft: "3%",
            }}
          >
            <option value="All">????????????????????? ...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label
            htmlFor="floorno"
            className="form-label"
            style={{
              marginLeft: "5%",
            }}
          >
            ???????????????:
          </label>

          <select
            className="form-select"
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            aria-label="Filter by status"
            style={{
              border: "1px solid #9ABCDF",
              maxWidth: "150px",
              width: "100%",
              marginLeft: "5%",
            }}
          >
            <option value="All">??????????????????????????????...</option>
            <option value="AVAILABLE">AVAILABLE</option>
            <option value="NOT AVAILABLE">NOT AVAILABLE</option>
          </select>
        </div>
        <div className="table-responsive">
          <table
            className="table table-hover align: middle table-borderless"
            style={{ maxWidth: "800px" }}
          >
            <thead
              style={{
                backgroundColor: "#C7E5F0",
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                fontSize: "18px",
                height: "30px",
              }}
            >
              <tr>
                <th scope="col">?????????????????????</th>
                <th scope="col">???????????????</th>
                <th scope="col">?????????????????????????????????</th>
                <th scope="col">?????????????????????????????????????????????</th>
              </tr>
            </thead>
            <tbody>
              {search(items).map((item) => (
                <tr style={rowstyle} key={item.id}>
                  <td>{item.ROOMNO}</td>
                  <td>{item.STATUS}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleInfo"
                      data-bs-whatever="@mdo"
                    >
                      ??????????????????
                    </button>
                    <div
                      className="modal fade"
                      id="exampleInfo"
                      tabIndex="-1"
                      aria-labelledby="exampleModalInfo"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div
                            className="modal-header"
                            style={{ backgroundColor: "#C7E5F0" }}
                          >
                            <h5 className="modal-title" id="exampleModalInfo">
                              Resident Information
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body position-relative">
                            <h6 className="fs-5 fw-bold position-absolute top-2 start-2">
                              ???????????? 101
                            </h6>
                            <br />
                            <div
                              className="container col-12 mb-3 mt-2 pt-2 pb-3 "
                              style={{
                                backgroundColor: "#EAE7E2",
                              }}
                            >
                              <div className="row">
                                <div className="col-3"></div>
                                <div className="col-9">
                                  <div className="row justify-content-start">
                                    <div className="col-5">
                                      <p>????????????</p>
                                      <p>?????????????????????</p>
                                      <p>?????????</p>
                                      <p>?????????</p>
                                      <p>???????????????????????????????????????</p>
                                      <p>?????????????????????????????????????????????</p>
                                      <p>???????????????????????????????????????</p>
                                    </div>
                                    <div className="col-7">
                                      <p>????????????</p>
                                      <p>?????????????????????</p>
                                      <p>?????????</p>
                                      <p>?????????</p>
                                      <p>???????????????????????????????????????</p>
                                      <p>?????????????????????????????????????????????</p>
                                      <p>???????????????????????????????????????</p>
                                    </div>
                                  </div>
                                </div>
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
                            <button type="button" className="btn btn-primary">
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
                      ???????????????
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
                            <h4 className="modal-title" id="exampleModalLabel">
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
                                  <a href="/addresident/nocode" target="_blank">
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
                                      style={{
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
                                      }}
                                    >
                                      <div className="mb-3">
                                        <label
                                          htmlFor="exampleFormControlInput1"
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
                                          htmlFor="exampleFormControlInput1"
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
                                          htmlFor="exampleFormControlInput1"
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
                                          htmlFor="exampleFormControlInput1"
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
                                          htmlFor="exampleFormControlInput1"
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
                                      style={{
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
                                      }}
                                    >
                                      <div className="mb-3">
                                        <label
                                          htmlFor="exampleFormControlInput1"
                                          className="form-label"
                                        >
                                          ???????????????????????????????????????
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
                                          htmlFor="exampleFormControlInput1"
                                          className="form-label"
                                        >
                                          ???????????????????????????????????????
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
                                          htmlFor="exampleFormControlInput1"
                                          className="form-label"
                                        >
                                          ???????????????????????????????????????
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};
export default Room;
