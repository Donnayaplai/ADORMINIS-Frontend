import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Utility = () => {
  return (
    <div className="container">
      <h1>Utility Calculation</h1>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-12 col-md-10 col-lg-8">
          <form className="card-body row no-gutters align-items-center">
            <div className="col-auto">
              <i className="fas fa-search h4 text-body"></i>
            </div>
            <div className="col">
              <input
                className="form-control form-control-lg form-control-borderless"
                type="search"
                placeholder="Type to search..."
              ></input>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="container col-10 mb-3 pt-2 pb-3"
        style={{ backgroundColor: "#EAE7E2" }}
      >
        <div className="container pb-3">
          <div className="container mt-3 mb-2">
            <h5>Room 201</h5>
            <h6>Water</h6>
          </div>
          <div className="col-sm-4">
            <label
              for="Name"
              className="form-label"
            >
              เลขมิเตอร์ก่อนหน้า
            </label>
            <input
              name="previous_watermeter"
              type="text"
              className="form-control"
              placeholder="2000"
              disabled
            />
          </div>
          <div className="col-sm-4">
            <label
              for="Name"
              className="form-label"
            >
              เลขมิเตอร์ปัจจุบัน
            </label>
            <input
              name="current_watermeter"
              type="text"
              className="form-control"
              placeholder="2000"

            />
          </div>
          <div className="container mt-3 mb-2">
            <h6>Electricity</h6>
          </div>
          <div className="col-sm-4">
            <label
              for="Name"
              className="form-label"
            >
              เลขมิเตอร์ก่อนหน้า
            </label>
            <input
              name="previous_elctmeter"
              type="text"
              className="form-control"
              placeholder="2000"
            />
          </div>
          <div className="col-sm-4">
            <label
              for="Name"
              className="form-label"
            >
              เลขมิเตอร์ปัจจุบัน
            </label>
            <input
              name="previous_elctmeter"
              type="text"
              className="form-control"
              placeholder="2000"
            />
          </div>
        </div>
      </div>
      <button
              type="button"
              class="btn mt-3 float-end"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{
                backgroundColor: "#C7E5F0",
                borderRadius: "4px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
                width: "200px",
                height: "50px",
                marginRight: "90px",
              }}
            >
              คำนวณทั้งหมด
            </button>
    </div>
  );
};
export default Utility;
