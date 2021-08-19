import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };

  const inputstyle = {
    maxWidth: "400px",
    width: "90%",
    height: "50px",
    border: "none",
    borderRadius: "4px",
    marginBottom: "10px",
    padding: "5px",
    marginLeft: "10px",
    marginRight: "auto",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div
              className="card-body p-4 p-sm-5"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <h3 className="card-title text-center mb-3 text-uppercase">
                Login with Adorminis
              </h3>
              <form>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    placeholder="อีเมล"
                    name="email"
                    style={inputstyle}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="รหัสผ่าน"
                    name="password"
                    style={inputstyle}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                {error && (
                  <div
                    className="error"
                    style={{ color: "red", fontSize: "20px" }}
                  >
                    {error}
                  </div>
                )}

                <div className="d-grid">
                  <button
                    className="btn btn-login text-uppercase fw-bold"
                    type="submit"
                    onClick={login}
                    value={loading ? "Loading..." : "Login"}
                    style={{
                      fontSize: "0.9rem",
                      letterSpacing: "0.05rem",
                      padding: "0.75rem 1rem",
                      color: "white !important",
                      backgroundColor: "#c7e5f0",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
