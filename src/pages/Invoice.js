import React from "react";

function Invoice() {
  return (
    <div>
      <h1 className="text-dark text-center">Invoice</h1>
      <div class="col-xl-10 col-lg-8 col-md-6">
            <input
              type="text"
              class="form-control"
              id="search"
              placeholder="Search here"/>
          </div>
          <div className="row">
          <div class="container mt-3">
        <h5>Year : </h5>
        <h5>Month : </h5>
      </div>
</div>
    </div>
     
  );
}
export default Invoice;
