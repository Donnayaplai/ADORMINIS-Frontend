import React, { useState } from "react";
import Axios from "axios";

export default function DormSetting() {
  const [DormNameTHReg, setDormNameTH] = useState("");
  const [DormNameENGReg, setDormNameENG] = useState("");
  const [AddressReg, setAddress] = useState("");
  const [StreetReg, setStreet] = useState("");
  const [SubdistrictReg, setSubdistrict] = useState("");
  const [DistrictReg, setDistrict] = useState("");
  const [PostalCodeReg, setPostalCode] = useState("");
  const [ProvinceReg, setProvince] = useState("");
  // const [BuildingNameReg, setBuildingName] = useState("");
  // const [AmountofBuildingReg, setAmountofBuilding] = useState("");
  const DormInfoSubmit = () => {
    Axios.post("http://localhost:3001/dorminfo", {
      DormNameTH: DormNameTHReg,
      DormNameENG: DormNameENGReg,
      Address: AddressReg,
      Street: StreetReg,
      Subdistrict: SubdistrictReg,
      District: DistrictReg,
      PostalCode: PostalCodeReg,
      Province: ProvinceReg,
      // BuildingName: BuildingNameReg,
      // AmountofBuilding: AmountofBuildingReg,
    }).then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <div className="dormsetting mb-5">
        <div className="container mt-3 text-center">
          <div className="row">
            <div className="col-xl-9 col-md-8 mx-auto ">
              <h1 className="text-dark text-center">Dormitory Information</h1>
            </div>
          </div>
        </div>
        <div className="container pb-3">
          <div className="container mt-3 mb-2">
            <h5>Information & Address</h5>
          </div>
          <form method="POST" action="">
            <div
              className="container col-10 mb-3 pt-2 pb-3"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div className="row">
                <div className="col-xl-8 col-lg-6 col-md-6">
                  <label for="DormNameTH" className="form-label">
                    Dormitory Name (TH)
                  </label>
                  <input
                    name="DormNameTH"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setDormNameTH(e.target.value);
                    }}
                    placeholder="ตัวอย่าง: สราญสุข การเด้นท์คอร์ท"
                    required
                  />
                </div>
                <div className="col-xl-8 col-lg-6 col-md-6">
                  <label for="DormNameENG" className="form-label">
                    Dormitory Name (ENG)
                  </label>
                  <input
                    name="DormNameENG"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setDormNameENG(e.target.value);
                    }}
                    placeholder="ตัวอย่าง: Saransuk Gardencourt"
                    required
                  />
                </div>
                <div className="col-xl-8 col-lg-8 col-md-6">
                  <label for="Address" className="form-label">
                    Address
                  </label>
                  <textarea
                    name="Address"
                    className="form-control"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    placeholder="บ้านเลขที่/อาคาร/หมู่บ้าน/ หมู่ที่"
                  ></textarea>
                </div>
                <div className="col-xl-8 col-lg-6 col-md-6">
                  <label for="Street" className="form-label">
                    Street
                  </label>
                  <input
                    name="Street"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <label for="Subdistrict" className="form-label">
                    Subdistrict
                  </label>
                  <input
                    name="Subdistrict"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setSubdistrict(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col-xl-6 col-lg-4 col-md-6">
                  <label for="District" className="form-label">
                    District
                  </label>
                  <input
                    name="District"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col">
                  <label for="Postcode" className="form-label">
                    Postal Code
                  </label>
                  <input
                    name="Postcode"
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setPostalCode(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col">
                  <label for="Province" className="form-label">
                    Province
                  </label>
                  <select
                    id="Province"
                    className="form-select"
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  >
                    <option selected>Choose...</option>
                    <option>กรุงเทพมหานคร</option>
                    <option>กระบี่</option>
                    <option>กาญจนบุรี</option>
                    <option>กาฬสินธุ์</option>
                    <option>กำแพงเพชร</option>
                    <option>ขอนแก่น</option>
                    <option>จันทบุรี</option>
                    <option>ฉะเชิงเทรา</option>
                    <option>ชลบุรี</option>
                    <option>ชัยภูมิ</option>
                    <option>ชุมพร</option>
                    <option>เชียงราย</option>
                    <option>เชียงใหม่</option>
                    <option>ตรัง</option>
                    <option>ตราด</option>
                    <option>ตาก</option>
                    <option>นครนายก</option>
                    <option>นครปฐม</option>
                    <option>นครพนม</option>
                    <option>นครราชสีมา</option>
                    <option>นครศรีธรรมราช</option>
                    <option>นครสวรรค์</option>
                    <option>นนทบุรี</option>
                    <option>นราธิวาส</option>
                    <option>น่าน</option>
                    <option>หนองคาย</option>
                    <option>หนองบัวลำภู</option>
                    <option>บุรีรัมย์</option>
                    <option>ปทุมธานี</option>
                    <option>ประจวบคีรีขันธ์</option>
                    <option>ปราจีนบุรี</option>
                    <option>ปัตตานี</option>
                    <option>พระนครศรีอยุธยา</option>
                    <option>พังงา</option>
                    <option>พัทลุง</option>
                    <option>พิจิตร</option>
                    <option>พิษณุโลก</option>
                    <option>เพชรบุรี</option>
                    <option>เพชรบูรณ์</option>
                    <option>แพร่</option>
                    <option>พะเยา</option>
                    <option>ภูเก็ต</option>
                    <option>มหาสารคาม</option>
                    <option>แม่ฮ่องสอน</option>
                    <option>มุกดาหาร</option>
                    <option>ยะลา</option>
                    <option>ยโสธร</option>
                    <option>ร้อยเอ็ด</option>
                    <option>ระนอง</option>
                    <option>ระยอง</option>
                    <option>ราชบุรี</option>
                    <option>ลพบุรี</option>
                    <option>ลำปาง</option>
                    <option>ลำพูน</option>
                    <option>เลย</option>
                    <option>ศรีสะเกษ</option>
                    <option>สกลนคร</option>
                    <option>สงขลา</option>
                    <option>สตูล</option>
                    <option>สมุทรปราการ</option>
                    <option>สมุทรสงคราม</option>
                    <option>สมุทรสาคร</option>
                    <option>สระแก้ว</option>
                    <option>สระบุรี</option>
                    <option>สิงห์บุรี</option>
                    <option>สุโขทัย</option>
                    <option>สุพรรณบุรี</option>
                    <option>สุราษฎร์ธานี</option>
                    <option>สุรินทร์</option>
                    <option>อ่างทอง</option>
                    <option>อุดรธานี</option>
                    <option>อุทัยธานี</option>
                    <option>อุตรดิตถ์</option>
                    <option>อุบลราชธานี</option>
                    <option>อำนาจเจริญ</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div className="container mt-3 mb-2">
              <h5>Building Setting</h5>
            </div>
            <div
              className="container col-10 mb-3 pt-2 pb-3"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div className="row">
                <div className="col-xl-6 col-lg-4 col-md-4">
                  <label for="BuidingName" className="form-label">
                    Building Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setBuildingName(e.target.value);
                    }}
                    placeholder="ตัวอย่าง: สราญสุข"
                    required
                  />
                </div>
                <div clas="col-xl-6 col-lg-4 col-md-4">
                  <label for="NumofBuilding" className="form-label">
                    Amount of Building
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => {
                      setAmountofBuilding(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div> */}

            {/* <div className="container mt-3 mb-2">
              <h5>Utitilities Setting</h5>
            </div>

             <div
              className="container col-10 pt-2 pb-3 mb-2"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div className="row justify-content-start">
                <div className="col-4">
                  <label for="inputPriceperUnit" className="form-label">
                    Price/Unit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => {
                      setWater(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="col-4">
                  <label for="inputMinimumUnit" className="form-label">
                    Minimum Unit
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMinimumUnit"
                    required
                  />
                </div>
                <div className="col-4">
                  <label for="inputMinimumPrice" className="form-label">
                    Minimum Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMinimumPrice"
                    required
                  />
                </div>
              </div>
            </div>
            <div
              className="container col-10 pt-2 pb-3 mb-2"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div className="col-4">
                <label for="inputMinimumPrice" className="form-label">
                  Minimum Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputMinimumPrice"
                  required
                />
              </div>
            </div> */}
            <button
              className="btn"
              style={{
                width: "200px",
                height: "50px",
                backgroundColor: "#C7E5F0",
                float: "right",
                marginTop: "10px",
              }}
              type="submit"
              onClick={DormInfoSubmit}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      );
    </div>
  );
}
