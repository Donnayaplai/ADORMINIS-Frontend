// import React from "react";
import React, { useState } from "react";
import Axios from "axios";

function Signup() {
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [fnameReg, setFNameReg] = useState("");
  const [lnameReg, setLNameReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      email: emailReg,
      password: passwordReg,
      fname: fnameReg,
      lname: lnameReg,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="container">
      <form>
        <h3>Register</h3>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
            className="form-control"
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
            className="form-control"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label>Firstname</label>
          <input
            type="text"
            onChange={(e) => {
              setFNameReg(e.target.value);
            }}
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            onChange={(e) => {
              setLNameReg(e.target.value);
            }}
            className="form-control"
            placeholder="Last name"
          />
        </div>

        <button
          onClick={register}
          type="submit"
          className="btn btn-dark btn-lg btn-block mt-3"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
