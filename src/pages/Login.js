import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/home");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div
              className="card-body p-4 p-sm-5"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <h3 className="card-title text-center mb-5 text-uppercase">
                Login with Adorminis
              </h3>
              <Form onSubmit={handleLogin} ref={form}>
                <div className="form-floating mb-3">
                  <Input
                    type="email"
                    className="form-control form-control-lg border-0"
                    id="email"
                    placeholder="อีเมล"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required]}
                  />
                </div>
                <div className="form-floating mb-3">
                  <Input
                    type="password"
                    className="form-control form-control-lg border-0"
                    id="floatingPassword"
                    placeholder="รหัสผ่าน"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required]}
                  />
                </div>
                {/* 
                <div className="form-check mb-3">
                  <Input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label
                    className="form-check-label"
                    for="rememberPasswordCheck"
                  >
                    Remember password
                  </label>
                </div> */}
                <div className="d-grid">
                  <button
                    className="btn btn-login text-uppercase fw-bold"
                    type="submit"
                    style={{
                      fontSize: "0.9rem",
                      letterSpacing: "0.05rem",
                      padding: "0.75rem 1rem",
                      color: "white !important",
                      backgroundColor: "#c7e5f0",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    disabled={loading}
                  >
                    เข้าสู่ระบบ
                  </button>
                </div>
                <hr className="my-4" />
                <div className="d-grid mb-2">
                  <button
                    className="btn btn-google btn-login fw-bold"
                    type="submit"
                    style={{
                      color: "white !important",
                      backgroundColor: "#cd5642",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    <i className="fab fa-google me-2"></i>เข้าสู่ระบบด้วย Google
                  </button>
                </div>
                <div className="d-grid">
                  <button
                    className="btn btn-facebook btn-login fw-bold"
                    type="submit"
                    style={{
                      color: "white !important",
                      backgroundColor: "#415993",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                  >
                    <i className="fab fa-facebook-f me-2"></i> เข้าสู่ระบบด้วย
                    Facebook
                  </button>
                </div>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
