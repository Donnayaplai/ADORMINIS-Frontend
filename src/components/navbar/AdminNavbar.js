import React from "react";
import Logo from "./images/logo.png";
import "./AdminNavbar.css";
import * as BiIcons from "react-icons/bi";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as MiIcons from "react-icons/md";
const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a href="/">
          <img
            src={Logo}
            alt="Adorminis"
            width="30px"
            height="30px"
            style={{ marginRight: "10px" }}
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home <BiIcons.BiHome />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dormsetting">
                Dorm Setting <BiIcons.BiBuilding />
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/room">
                Room <BiIcons.BiDoorOpen />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/invoice">
                Invoice <RiIcons.RiBillLine />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/complain">
                Complaint <BiIcons.BiCommentDetail />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payment">
                Payment <MiIcons.MdPayment />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/utility">
                Utilities <AiIcons.AiOutlineCalculator />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                History
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/personalinfo">
                PersonalInfo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;

// <nav className="navbar navbar-expand-lg bg-dark ">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">
//       <img
//         src={Logo}
//         alt="logo"
//         width="30px"
//         height="24px"
//         className="d-inline-block align-text-top"
//       />
//       ADORMINIS
//     </a>
//     <button
//       className="navbar-toggler"
//       style={{ color: "black", width: "35px", height: "30px" }}
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarTogglerDemo02"
//       aria-controls="navbarTogglerDemo02"
//       aria-expanded="true"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">
//             Link
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
