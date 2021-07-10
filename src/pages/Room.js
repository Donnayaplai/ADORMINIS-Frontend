import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/App.css";
function Room() {
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
            <div class="col-auto">
              <button class="btn btn-lg btn-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="container overflow-hidden">
        <div class="row gx-3">
          <div class="col-7">
            <div class="border">
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
                    {data.map((i) => (
                      <tr style={rowstyle}>
                        <th scope="row">{i.ROOMNO}</th>
                        <td></td>
                        <td>
                          <button type="button" class="btn btn-light">
                            Info
                          </button>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-light"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            data-bs-whatever="@mdo"
                          >
                            Add
                          </button>
                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div
                                  class="modal-header"
                                  style={{ backgroundColor: "#C7E5F0" }}
                                >
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Resident Code
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <form>
                                    <div class="mb-3">
                                      <label
                                        for="message-text"
                                        class="col-form-label"
                                      >
                                        Message:
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="message-text"
                                        placeholder="Please enter your resident code here..."
                                      ></textarea>
                                    </div>
                                  </form>
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button type="button" class="btn btn-primary">
                                    Send message
                                  </button>
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
          <div class="col-5">
            <div
              class="p-3 border"
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
//         <div class="col-xl-10 col-lg-8 col-md-6">
//           <input
//             type="text"
//             class="form-control"
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
/* <div class="container mt-4 text-center">
        <div class="row">
          <div class="col-xl-10 col-lg-8 col-md-6">
            <input
              type="text"
              class="form-control"
              id="search"
              placeholder="Search here"
            />
          </div>
        </div>
      </div>
      <div class="container mt-3">
        <h5>Building : </h5>
        <h5>Floor : </h5>
      </div>
      <div className="container">
        <table class="table table-hover">
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
                <button type="button" class="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">102</th>
              <td>not available</td>
              <td>
                <button type="button" class="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">103</th>
              <td>available</td>
              <td>
                <button type="button" class="btn btn-light">
                  Info
                </button>
              </td>
              <td>
                <button type="button" class="btn btn-light">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container mt-3">
        <h5>Amount of Room Available : </h5>
        <h5>Amount of Room Not Available : </h5>
</div> */
