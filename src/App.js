import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { AuthContext } from "./helpers/AuthContext";
// import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Logo from "../src/images/logo.png";

// Public
import LandingPage from "./components/General/LandingPage";
import Login from "./components/RegisterLogin/Login";
// import Register from "./components/Register/Register";
import Registration from "./components/RegisterLogin/Registration";
// import PublicNavbar from "./components/Navbar/PublicNavbar";

//Admin
// import AdminNavbar from "./components/Navbar/AdminNavbar";
// import AdminPage from "./components/Admin/AdminPage";
import DormSetting from "./components/Admin/DormSetting";
import Room from "./components/Admin/Room/Room";
// import Invoice from "./pages/Invoice";
import Utility from "./components/Admin/Utility/Utility";
import UtilitySummary from "./components/Admin/Utility/UtilitySummary";
// import Payment from "./pages/Payment";
import NoCodeRoom from "./components/Admin/Room/NoCodeRoom";
import Home from "./components/General/Home";

//Resident
import ResidentComplain from "./components/Resident/Complaint";
// import UserPage from "./components/Resident/UserPage";
import Billing from "./components/Resident/Invoice";
import PaymentStatus from "./components/Resident/PaymentStatus";
// import RoleSelection from "./pages/RoleSelection";
import PersonalInfo from "./components/General/PersonalInfo";

function App() {
  // const [authState, setAuthState] = useState({
  //   email: "",
  //   id: 0,
  //   status: false,
  // });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/auth/auth", {
  //       headers: { accessToken: localStorage.getItem("accessToken") },
  //     })
  //     .then((response) => {
  //       if (response.data.error) {
  //         setAuthState({ ...authState, status: false });
  //       } else {
  //         setAuthState({
  //           email: response.data.email,
  //           id: response.data.id,
  //           status: true,
  //         });
  //       }
  //     });
  // }, []);

  // const logout = () => {
  //   localStorage.removeItem("accessToken");
  //   setAuthState({ email: "", id: 0, status: false });
  // };
  return (
    <div className="App">
      {/* <AuthContext.Provider value={{ authState, setAuthState }}> */}
      <Router>
        <div className="navbar">
          <nav className="navbar navbar-expand">
            <Link to={"/"} className="navbar-brand">
              <img
                src={Logo}
                alt="Adorminis"
                width="30px"
                height="30px"
                style={{ marginRight: "10px", marginLeft: "10px" }}
              />
            </Link>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/home"} className="nav-link">
                  Home
                </Link>
              </li>
            </div>
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/registration"} className="nav-link">
                  Register
                </Link>
              </li>
            </div>
            {/* {!authState.status ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/registration"} className="nav-link">
                    Register
                  </Link>
                </li>
              </div>
            ) : (
              <button onClick={logout}>Logout</button>
            )}
            <h5 className="mt-0">Current user: {authState.email}</h5> */}
          </nav>
        </div>
        <Switch>
          {/* Public */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          {/* Admin */}
          {/* <Route path="/admin" component={AdminPage} /> */}
          <Route path="/dormsetting" component={DormSetting} />
          <Route path="/allroom/:dormID" component={Room} />
          <Route path="/addresident/nocode" exact component={NoCodeRoom} />
          {/* Resident */}
          {/* <Route path="/resident" component={UserPage} /> */}
          <Route path="/complain" component={ResidentComplain} />
          {/* <Route path="/room/:dormID" component={Room} />
//         <Route path="/:dormID/:roomID" component={Info} /> */}
          <Route path="/billing" component={Billing} />
          <Route path="/paymentstatus" component={PaymentStatus} />
          <Route path="/utility" component={Utility} />
          <Route path="/utilsummary" component={UtilitySummary} />
          <Route path="/personalinfo" component={PersonalInfo} />
        </Switch>
      </Router>
      {/* </AuthContext.Provider> */}
    </div>
  );
}
export default App;
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   BrowserRouter as Routers,
//   Switch,
//   Route,
//   Link,
// } from "react-router-dom";
// import Logo from "../src/images/logo.png";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// // Public pages
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import Register from "./components/Register/Register";
// import Registration from "./pages/Registration";
// // import PublicNavbar from "./components/Navbar/PublicNavbar";

// //Admin pages
// // import AdminNavbar from "./components/Navbar/AdminNavbar";
// import AdminPage from "./pages/AdminPage";
// import DormSetting from "./pages/DormSetting";
// import Room from "./components/Admin/Room/Room";
// // import Invoice from "./pages/Invoice";
// import Utility from "./components/Admin/Utilities/Utility";
// import UtilitySummary from "./components/Admin/Utilities/UtilitySummary";
// // import Payment from "./pages/Payment";
// import NoCodeRoom from "./components/Admin/Room/NoCodeRoom";
// import Home from "./pages/Home";

// //Resident pages
// import ResidentComplain from "./components/Resident/Complaint";
// import UserPage from "./pages/UserPage";
// import Billing from "./components/Resident/Invoice";
// import PaymentStatus from "./components/Resident/PaymentStatus";
// // import RoleSelection from "./pages/RoleSelection";
// import PersonalInfo from "./pages/PersonalInfo";

// import { logout } from "./actions/auth";
// import { clearMessage } from "./actions/messages";

// import { history } from "./helpers/history";

// // import AuthVerify from "./common/AuthVerify";
// import EventBus from "./common/EventBus";

// const App = () => {
//   const [showAdminPage, setShowAdminPage] = useState(false);

//   const { user: currentUser } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     history.listen((location) => {
//       dispatch(clearMessage()); // clear message when changing location
//     });
//   }, [dispatch]);

//   useEffect(() => {
//     if (currentUser) {
//       setShowAdminPage(currentUser.roles.includes("ROLE_ADMIN"));
//     }
//   }, [currentUser]);

//   const logOut = () => {
//     dispatch(logout());
//   };
//   useEffect(() => {
//     if (currentUser) {
//       setShowAdminPage(currentUser.roles.includes("ROLE_ADMIN"));
//     } else {
//       setShowAdminPage(false);
//     }

//     EventBus.on("logout", () => {
//       logOut();
//     });

//     return () => {
//       EventBus.remove("logout");
//     };
//   }, [currentUser, logOut]);

//   return (
//     <Routers history={history}>
//       <nav className="navbar navbar-expand">
//         <Link to={"/"} className="navbar-brand">
//           <img
//             src={Logo}
//             alt="Adorminis"
//             width="30px"
//             height="30px"
//             style={{ marginRight: "10px", marginLeft: "10px" }}
//           />
//         </Link>
//         <div className="navbar-nav mr-auto">
//           <li className="nav-item">
//             <Link to={"/"} className="nav-link">
//               Home
//             </Link>
//           </li>

//           {showAdminPage && (
//             <li className="nav-item">
//               <Link to={"/admin"} className="nav-link">
//                 Admin
//               </Link>
//             </li>
//           )}

//           {currentUser && (
//             <li className="nav-item">
//               <Link to={"/resident"} className="nav-link">
//                 User
//               </Link>
//             </li>
//           )}
//         </div>

//         {currentUser ? (
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/profile"} className="nav-link">
//                 {currentUser.username}
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a href="/login" className="nav-link" onClick={logOut}>
//                 LogOut
//               </a>
//             </li>
//           </div>
//         ) : (
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/login"} className="nav-link">
//                 Login
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/register"} className="nav-link">
//                 Register
//               </Link>
//             </li>
//           </div>
//         )}
//       </nav>
//       <Switch>
//         {/* Public */}
//         <Route path="/" exact component={LandingPage} />
//         <Route path="/home" component={Home} />
//         <Route path="/register" component={Register} />
//         <Route path="/login" component={Login} />
//         <Route path="/registration" component={Registration} />
//         {/* Admin */}
//         <Route path="/admin" component={AdminPage} />
//         <Route path="/dormsetting" component={DormSetting} />
//         <Route path="/room" component={Room} />
//         <Route path="/addresident/nocode" exact component={NoCodeRoom} />
//         {/* Resident */}
//         <Route path="/resident" component={UserPage} />
//         <Route path="/complain" component={ResidentComplain} />
//         {/* <Route path="/room/:dormID" component={Room} />
//         <Route path="/:dormID/:roomID" component={Info} /> */}
//         <Route path="/billing" component={Billing} />
//         <Route path="/paymentstatus" component={PaymentStatus} />
//         <Route path="/utility" component={Utility} />
//         <Route path="/utilsummary" component={UtilitySummary} />

//         <Route path="/personalinfo" component={PersonalInfo} />
//       </Switch>
//     </Routers>
//   );
// };
// export default App;
