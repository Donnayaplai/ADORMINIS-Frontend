import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((response) => {
  //     if (response.data.loggedIn == true) {
  //       setLoginStatus(response.data.user[0].username);
  //     }
  //   });
  // }, []);
  return (
    <div>
      <div className="container">
        <div className="form-header">
          <h1>Login with Adorminis</h1>
        </div>
        <div className="form-group">
          <form action="">
            <div id="form-soc">
              <button
                type="submit"
                className="btn-gg"
                style={{
                  backgroundColor: "#CD5642",
                  marginRight: "10px",
                }}
              >
                Google
              </button>
              <button
                type="submit"
                className="btn-fb"
                style={{
                  backgroundColor: "#415993",
                }}
              >
                Facebook
              </button>
            </div>

            <div>
              <input
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter your password"
                name="password"
                required
              />
            </div>

            <button type="submit" className="registerbtn" onClick={login}>
              Login
            </button>
          </form>
        </div>
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
}
export default Login;
/* <div className="login-form">
        <div class="container mt-5 text-center">
          <div class="row">
            <div class="col-xl-9 col-md-8 mx-auto ">
              <h1 class="text-dark text-center">Signin with Adorminis</h1>
            </div>
          </div>
        </div>
        {/* <form onSubmit={handleLogin} ref={form}> */
/* <form> */
/* <div
            class="container mx-auto mt-3"
            style={{
              backgroundColor: "#EAE7E2",
              width: "600px",
              height: "500px",
            }}
          >
            <div className="container">
              <div class="row">
                <div class="col-4">
                  <button
                    class="btn btn-primary mt-4"
                    href="#"
                    type="submit"
                    style={{
                      backgroundColor: "#CD5642",
                      width: "200px",
                      height: "60px",
                    }}
                  >
                    Google
                  </button>
                  <button
                    class="btn btn-primary mt-4"
                    href="#"
                    type="submit"
                    style={{
                      backgroundColor: "#415993",
                      width: "200px",
                      height: "60px",
                    }}
                  >
                    Facebook
                  </button>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 mt-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  class="form-control"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  class="form-control"
                />
              </div>
            </div>
            <button
              onClick={login}
              class="btn mt-3 mb-10"
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "#C7E5F0",
                float: "right",
              }}
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div> */
