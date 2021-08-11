import React from "react";

const ResidentComplaint = () => {
  let rowstyle = {
    backgroundColor: "#EAE7E2",
    border: "none",
    textAlign: "center",
  };
  let thead = {
    backgroundColor: "#C7E5F0",
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
    height: "30px",
  };
  return (
    <div className="container">
      <h1 className="text-center">แจ้งเรื่องร้องเรียน</h1>
      <h4 className="fw-bold ms-5">ส่งเรื่องร้องเรียน</h4>

      <form
        className="mx-auto p-4 mt-3"
        style={{
          backgroundColor: "#EAE7E2",
          maxWidth: "900px",
          width: "90%",
        }}
      >
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            style={{
              maxWidth: "600px",
              width: "100%",
            }}
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="4"
            style={{
              maxWidth: "600px",
              width: "100%",
              margin: "0",
            }}
          ></textarea>
        </div>
      </form>
      <h4 className="fw-bold ms-5">ประวัติและสถานะการร้องเรียน</h4>
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
                placeholder="พิมพ์เพื่อค้นหา..."
              ></input>
            </div>
            <div className="col-auto">
              <button className="btn btn-lg btn-success" type="submit">
                ค้นหา
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="table-responsive text-center ">
        <table
          className="table table-hover align:middle table-borderless mx-auto"
          style={{
            maxWidth: "900px",
            width: "90%",
          }}
        >
          <thead style={thead}>
            <tr>
              <th scope="col">วัน/เดือน/ปี</th>
              <th scope="col">เรื่องที่ร้องเรียน</th>
              <th scope="col">สถานะ</th>
            </tr>
          </thead>
          <tbody style={rowstyle}>
            <tr>
              <th scope="row">30/04/2021</th>
              <td>ไฟเสีย ต้องการเปลี่ยน</td>
              <td>เรียบร้อยแล้ว</td>
            </tr>
            <tr>
              <th scope="row">30/04/2021</th>
              <td>ไฟเสีย ต้องการเปลี่ยน</td>
              <td>เรียบร้อยแล้ว</td>
            </tr>
            <tr>
              <th scope="row">30/04/2021</th>
              <td>ไฟเสีย ต้องการเปลี่ยน</td>
              <td>เรียบร้อยแล้ว</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResidentComplaint;
