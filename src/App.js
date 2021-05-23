import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import DormSetting from "./pages/DormSetting";
import Room from "./pages/Room";
import Invoice from "./pages/Invoice";
import Login from "./pages/login/Login";
import SignUp from "./pages/register/Signup";
import Utility from "./pages/Utility";

const App = () => {
  return (
    <Routers>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dormsetting" component={DormSetting} />
        <Route path="/room" component={Room} />
        <Route path="/invoice" component={Invoice} />
        <Route path="/utility" component={Utility} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
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
