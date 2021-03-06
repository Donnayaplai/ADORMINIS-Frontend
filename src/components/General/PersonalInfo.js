import React from "react";

const PersonalInfo = () => {
  const picicon = {
    textAlign: "center",
    backgroundColor: "#C4C4C4",
    borderRadius: "50%",
    color: "white",
    width: "150px",
    height: "150px",
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: "100px",
  };
  const icon = {
    boxSizing: "border-box",
    color: "#fff",
    fontFamily: "simple-line-icons",
    fontSize: "40px",
    fontWeight: "400",
    lineHeight: "1",
    speak: "none",
    textAlign: "center",
    textTransform: "none",
  };
  return (
    <div className="container">
      <h1 className="text-center">Profile</h1>
      <form
        className="col-10 p-3 mx-auto"
        style={{ backgroundColor: "#EAE7E2" }}
      >
        <div className="form-icon mb-5" style={picicon}>
          <span>
            <i className="icon icon-user" tyle={icon}></i>
          </span>
        </div>
        {/* <div className="row mx-auto">
          <div className="col-6">
            <label for="exampleInputEmail1" className="form-label col-2">
              Firstname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="col-6">
            <label for="exampleInputEmail1" className="form-label col-2">
              Lastname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-6">
            <label for="exampleInputEmail1" className="form-label col-2">
              Tel
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="col-6">
            <label for="exampleInputPassword1" className="form-label col-2">
              Role
            </label>
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              disabled
            >
              <option selected>Open this select menu</option>
            </select>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-8">
            <h6 className="me-3">Gender: </h6>
            <div className="form-check form-check-inline me-4">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="femaleGender"
                value="option1"
              />
              <label className="form-check-label" for="femaleGender">
                Female
              </label>
            </div>

            <div className="form-check form-check-inline me-4">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="maleGender"
                value="option2"
              />
              <label className="form-check-label" for="maleGender">
                Male
              </label>
            </div>
          </div>
          <div className="col-4"></div>
        </div> */}
        <div className="mb-3 text-center">
          <label for="exampleInputEmail1" className="form-label col-2">
            Firstname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3 text-center">
          <label for="exampleInputPassword1" className="form-label col-2">
            Lastname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 text-center">
          <label for="exampleInputPassword1" className="form-label col-2">
            Telephone No.
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="row">
          <div className="col-4 mx-auto">
            <label for="exampleInputPassword1" className="form-label col-2">
              Role
            </label>
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              disabled
            >
              <option selected>Select</option>
            </select>
          </div>
          <div className="col-4 mx-auto">
            <label for="exampleInputPassword1" className="form-label col-2">
              Gender
            </label>
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              disabled
            >
              <option selected>Select</option>
            </select>
          </div>
        </div>
      </form>
      {/* <button type="submit" className="btn btn-primary mt-5">
        Submit
      </button> */}
    </div>
  );
};

export default PersonalInfo;
