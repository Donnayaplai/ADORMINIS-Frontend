import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Logo from "../src/images/logo.png";

// Public
import LandingPage from "./components/General/LandingPage";
import Login from "./components/RegisterLogin/Login";
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
// import PersonalInfo from "./components/General/PersonalInfo";

function App() {
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
        </Switch>
      </Router>
      {/* </AuthContext.Provider> */}
    </div>
  );
}
export default App;
