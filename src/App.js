import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import DormSetting from "./pages/DormSetting";
import Room from "./pages/Room";
import Invoice from "./pages/Invoice";
//ทดสอบการเชื่อมต่อกับ backend
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
function App() {
  return (
    <Routers>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dormsetting" component={DormSetting} />
        <Route path="/room" component={Room} />
        <Route path="/invoice" component={Invoice} />
      </Switch>
    </Routers>
  );
}
export default App;
