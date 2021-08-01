import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar2 from "./components/Navbar/Navbar2";
import DormSetting from "./pages/DormSetting";
import Room from "./pages/Room";
import Invoice from "./pages/Invoice";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Utility from "./pages/Utility";
import Complaint from "./pages/Complaint";
import Payment from "./pages/Payment";
import NoCodeRoom from "./components/Room/NoCodeRoom";
import Home from "./pages/Home";
// import RoleSelection from "./pages/RoleSelection";
import PersonalInfo from "./pages/PersonalInfo";
import LandingPage from "./pages/LandingPage";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/messages";

// import { history } from "./helpers/history";

const App = () => {
  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  // const { user: currentUser } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   history.listen((location) => {
  //     dispatch(clearMessage()); // clear message when changing location
  //   });
  // }, [dispatch]);

  // const logOut = useCallback(() => {
  //   dispatch(logout());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   } else {
  //     setShowAdminBoard(false);
  //   }

  //   EventBus.on("logout", () => {
  //     logOut();
  //   });

  //   return () => {
  //     EventBus.remove("logout");
  //   };
  // }, [currentUser, logOut]);

  return (
    <Routers>
      <Navbar2 />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route path="/dormsetting" component={DormSetting} />
        <Route path="/room" component={Room} />
        <Route path="/addresident/nocode" exact component={NoCodeRoom} />
        {/* <Route path="/room/:dormID" component={Room} />
        <Route path="/:dormID/:roomID" component={Info} /> */}
        <Route path="/invoice" component={Invoice} />
        <Route path="/complain" component={Complaint} />
        <Route path="/payment" component={Payment} />
        <Route path="/utility" component={Utility} />
        <Route path="/login" component={Login} />
        {/* <Route path="/signup/roleselection" exact component={RoleSelection} /> */}
        <Route path="/personalinfo" component={PersonalInfo} />
        <Route path="/register" component={Register} />
        {/* <Route path="/user" component={BoardUser} />
        <Route path="/admin" component={BoardAdmin} /> */}
      </Switch>
    </Routers>
  );
};
export default App;
//ทดสอบการเชื่อมต่อกับ backend
// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//แสดงผลหน้า frontend
