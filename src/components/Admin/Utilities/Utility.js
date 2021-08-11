import React from "react";

function Utility() {
  return (
    <div className="container">
      <h1 className="text-center">คำนวณค่าน้ำ/ ค่าไฟ</h1>
      <div className="row justify-content-center mt-3">
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
      <div className="container">
        <div className="mb-3">
          <a href="/utilsummary" style={{ float: "right", fontSize: "20px" }}>
            สรุปรวมทั้งหมด
          </a>
          <br />
        </div>
        <div
          className="container mb-3 pt-2 pb-3"
          style={{ backgroundColor: "#EAE7E2", width: "100%" }}
        >
          <h5 className="fw-bold mb-3">ห้อง 101</h5>
          <h6 className="fw-bold mb-2">ค่าน้ำ</h6>
          <div className="row g-3">
            <div className="col">
              <label for="text" className="form-label col-md-6">
                เลขมิเตอร์ก่อนหน้า
              </label>

              <input
                id="text"
                name="text"
                type="text"
                className="form-control"
                disabled
              />
            </div>
            <div className="col">
              <label for="text" className="form-label col-md-6">
                เลขมิเตอร์ปัจจุบัน
              </label>

              <input
                id="text"
                name="text"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <hr className="my-2" />
          <h6 className>ค่าไฟ</h6>
          <div className="row g-3">
            <div className="col">
              <label for="text" className="form-label col-md-6">
                เลขมิเตอร์ก่อนหน้า
              </label>

              <input
                id="text"
                name="text"
                type="text"
                className="form-control"
                disabled
              />
            </div>
            <div className="col">
              <label for="text" className="form-label col-md-6">
                เลขมิเตอร์ปัจจุบัน
              </label>

              <input
                id="text"
                name="text"
                type="text"
                className="form-control"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Utility;
