import React from "react";
import "./Room.css";
import AllRoom from "./AllRoom";
import ShowRoomAmount from "./ShowRoomAmount";

const Room = () => {
  // const getRooms = async () => {
  //   await Axios.get(API_URL).then((response) => SetRoom(response.data));
  // };

  // useEffect(() => {
  //   getRooms();
  // }, []);

  return (
    <div className="container">
      <h1 className="text-center">สถานะห้องพัก</h1>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded"
              placeholder="พิมพ์เพื่อค้นหา"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <button type="button" className="btn btn-outline-primary">
              search
            </button>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden">
        <div className="row gx-4">
          <div className="col-7">
            <AllRoom />
          </div>
          <div className="col-5">
            <ShowRoomAmount />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Room;
