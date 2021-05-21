//import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Signup() {
  return (
    <div>
      <div className="signup-form">
        <div class="container mt-5 text-center">
          <div class="row">
            <div class="col-xl-9 col-md-8 mx-auto ">
              <h1 class="text-dark text-center">Register with Adorminis</h1>
            </div>
          </div>
        </div>
        <form method="post" action="">
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
                  id="email"
                  placeholder=" adorminis@gmail.com"
                  required
                />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <label for="password" class="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <label for="email" class="form-label">
                  Confirm Password
                </label>
                <input
                  name="passwordConfirm"
                  type="passwod"
                  class="form-control"
                  id="passwordConfirm"
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
      </div>
    </div>
  );
}
