import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Utility = () => {
  return (
    <div className="Room mb-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-xl-9 col-md-8 mx-auto ">
            <h1 className="text-dark text-center">Utilities Calculation</h1>
          </div>
        </div>
        <div class="col-xl-10 col-lg-8 col-md-6">
          <input
            type="text"
            class="form-control"
            id="search"
            placeholder="Search here"
          />
        </div>
      </div>

      <div>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>Room</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Water</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>Electricity</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Utility;
