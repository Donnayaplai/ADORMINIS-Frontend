import React, { useState, useEffect } from "react";
import Axios from "axios";

function Room() {
  const [data, SetData] = useState([]);

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
      <div class="inner-form">
        <div class="input-field">
          <input
            class="form-control"
            id="choices-text-preset-values"
            type="text"
            placeholder="Type to search..."
          />
          <button class="btn-search" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </div>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Room No.</th>
            <th scope="col">Status</th>
            <th scope="col">Resident Info</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr>
              <th scope="row">{i.ROOMNO}</th>
              <td></td>
              {/* {[i.ALLROOMSTATUS]}</td> */}
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
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Room;

/* // import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";

// const Room = () => { */
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
