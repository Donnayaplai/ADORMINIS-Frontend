import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Signup.css";
function Signup() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fnameReg, setFnameReg] = useState("");
  const [lnameReg, setLnameReg] = useState("");

  const signup = () => {
    Axios.post("http://localhost:3001/signup", {
      email: emailReg,
      password: passwordReg,
      fname: fnameReg,
      lname: lnameReg,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <div className="container">
        <div className="form-header">
          <h1>Register with Adorminis</h1>
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
                  setEmailReg(e.target.value);
                }}
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                placeholder="Enter your password"
                name="psw"
                required
              />
            </div>
            {/* 
            <div>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
              />
            </div> */}

            <div>
              <input
                type="text"
                onChange={(e) => {
                  setFnameReg(e.target.value);
                }}
                placeholder="Enter your name"
                name="fname"
              />
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setLnameReg(e.target.value);
                }}
                placeholder="Enter your lastname"
                name="lname"
              />
            </div>

            <p>By creating an account you agree to our Terms & Privacy.</p>

            <button type="submit" className="registerbtn" onClick={signup}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;

/* <div className="signup-form">
        <div class="container mt-5 text-center">
          <div class="row">
            <div class="col-xl-9 col-md-8 mx-auto ">
              <h1 class="text-dark text-center">Register with Adorminis</h1>
            </div>
          </div>
        </div>
        <form>
          <div
            class="container mx-auto mt-3"
            style={{
              backgroundColor: "#EAE7E2",
              width: "600px",
              height: "500px",
            }}
          >
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
              <div class="col-xl-6 col-lg-6 col-md-6 mt-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder=" adorminis@gmail.com"
                  required
                />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input name="password" type="password" class="form-control" />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <label for="email" class="form-label">
                  Confirm Password
                </label>
                <input
                  name="passwordConfirm"
                  type="password"
                  class="form-control"
                  required
                />
              </div>
            </div>
            <button
              class="btn mt-3 mb-10"
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "#C7E5F0",
                float: "right",
              }}
              type="submit"
            >
              Signup
            </button>
          </div>
        </form>
      </div> */
