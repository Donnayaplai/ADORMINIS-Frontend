import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/App.css";
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
        <div className="row gx-3">
          <div className="col-7">
            <div className="border">
              <div className="table-responsive rounded">
                <table
                  data-page-list="[10, 25, 50, 100, all]"
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
                    {data.map((i) => (
                      <tr style={rowstyle}>
                        <th scope="row">{i.ROOMNO}</th>
                        <td></td>
                        <td>
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
<<<<<<< HEAD
                                <div class="modal-body">
                                  <h6>Room 101</h6>
                                </div>
                                <div class="modal-footer">
=======
                                <div className="modal-body">Information</div>
                                <div className="modal-footer">
>>>>>>> update
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
                        <td key={i.id}>
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
<<<<<<< HEAD
                                  <div class="modal fade"
                                    id="addinfomodal"
                                    tabindex="-1"
                                    aria-labelledby="addinfoModalLabel"
                                    aria-hidden="true"
                                  >
                                    <div class="modal-dialog">
                                      <div class="modal-content">
                                        <div class="modal-header">
                                          <h5
                                            class="modal-title"
                                            id="addinfoModalLabel">Resident Information</h5>
                                          <button
                                            type="button"
                                            class="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close">

                                          </button>
                                        </div>
                                        <div class="modal-body">
                                        <div className="row">
                                          <div className="col-xl-8 col-lg-6 col-md-6">
                                            <h6> Personal Information</h6>
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="Name" className="form-label">
                                             Name 
                                            </label>
                                            <input
                                              name="Name"
                                              type="text"
                                              className="form-control"   
                                              placeholder="สมศรี"
                                              required
                                            />
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="Lastname" className="form-label">
                                             Lastname 
                                            </label>
                                            <input
                                              name="Lastname"
                                              type="text"
                                              className="form-control"   
                                              placeholder="มีชัย"
                                              required
                                            />
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="Telephone" className="form-label">
                                             Telephone no.
                                            </label>
                                            <input
                                              name="Telephone"
                                              type="text"
                                              className="form-control"   
                                              placeholder="083-254-7819"
                                              required
                                            />
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="Gender" className="form-label">
                                             Gender
                                            </label>
                                            <input
                                              name="Gender"
                                              type="text"
                                              className="form-control"   
                                              placeholder="Female"
                                              required
                                            />
                                          </div>
                                          <h6> Additional Information</h6>
                                          <div className="col-sm-9">
                                            <label for="contract_start" className="form-label">
                                             วันเริ่มสัญญา
                                            </label>
                                            <input
                                              name="contract_start"
                                              type="date"
                                              className="form-control"   
                                              required
                                            />
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="contract_end" className="form-label">
                                             วันสิ้นสุดสัญญา
                                            </label>
                                            <input
                                              name="contract_end"
                                              type="date"
                                              className="form-control"   
                                              required
                                            />
                                          </div>
                                          <div className="col-sm-9">
                                            <label for="check_in" className="form-label">
                                             วันที่เข้าพัก
                                            </label>
                                            <input
                                              name="check_in"
                                              type="date"
                                              className="form-control"   
                                              required
                                            />
                                          </div>
                                        </div>
                                        <div
                                          class="modal-footer">
                                          <button type="button"
                                            class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cancle</button>
                                          <button type="button" class="btn btn-primary">Save</button>
=======
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
>>>>>>> update
                                        </div>
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
          </div>
          <div className="col-5">
            <div
              className="p-3 border"
              style={{ backgroundColor: "#C7E5F0", maxHeight: "400px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Room;

//   const [room, setRoom] = useState(false);
//   const [hasError, setError] = useState({});
//   async function fetchData() {
//     const res = await fetch("http://localhost:3001/");
//     res
//       .json()
//       .then((res) => setRoom(res))
//       .catch((err) => setError(err));
//   }
//   useEffect(() => {
//     fetchData();
//   });
//   return (
//     <div>
//       <span>{JSON.stringify(room).toString()}</span>
//       <span>{JSON.stringify(hasError)}</span>
//     </div>
//   );
// };
// export default Room;
// import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams, useHistory } from "react-router-dom";
// function Room() {
//   let { dormID } = useParams();
//   const [room, setRoom] = useState([]);
//   const history = useHistory();
//   useEffect(() => {
//     // const fetchData = async () => {
//     //     const result = await axios.get(`http://localhost:3001/room/${dormID}`)
//     //     setRoom(result.data)
//     // }
//     axios.get(`http://localhost:3001/${dormID}`).then((response) => {
//       setRoom(response.data);
//     });
//     // fetchData()
//   }, [dormID]);
//   console.log(`http://localhost:3001/${dormID}`);
//   console.log(room);
//   return (
//     <div className="Room mb-5">
//       <div className="container text-center">
//         <div className="row">
//           <div className="col-xl-9 col-md-8 mx-auto ">
//             <h1 className="text-dark text-center">Room</h1>
//           </div>
//         </div>
//         <div className="col-xl-10 col-lg-8 col-md-6">
//           <input
//             type="text"
//             className="form-control"
//             id="search"
//             placeholder="Search here"
//           />
//         </div>
//       </div>
//       <div>
//         <div className="container">
//           <table className="table table-hover">
//             <thead>
//               <tr>
//                 <th scope="col">Room</th>
//                 <th scope="col">Status</th>
//                 <th scope="col"></th>
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {room.map((value, key) => {
//                 let roomID = value.ROOMID;
//                 let dormID = value.DORMID;
//                 return (
//                   <tr>
//                     <td>{value.ROOMNO}</td>
//                     <td>{value.STATUS}</td>
//                     <td>
//                       <button
//                         className="btn btn-light"
//                         type="submit"
//                         onClick={() => history.push(`/${dormID}/${roomID}`)}
//                       >
//                         Info
//                       </button>
//                     </td>
//                     <td>
//                       <button type="button" className="btn btn-light">
//                         Add
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//           {/* {value.ROOMNO}{" "} */}
//         </div>
//         {/* <div className="STTUS"> {value.STATUS} </div> */}
//       </div>
//     </div>
//   );
// }
// export default Room;
/* <div className="container mt-4 text-center">
        <div className="row">
          <div className="col-xl-10 col-lg-8 col-md-6">
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h5>Building : </h5>
        <h5>Floor : </h5>
      </div>
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Room</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">101</th>
              <td>not available</td>
              <td>
                <button type="button" className="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">102</th>
              <td>not available</td>
              <td>
                <button type="button" className="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">103</th>
              <td>available</td>
              <td>
                <button type="button" className="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container mt-3">
        <h5>Amount of Room Available : </h5>
        <h5>Amount of Room Not Available : </h5>
</div> */
