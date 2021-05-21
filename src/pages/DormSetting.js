import React from "react";

export default function DormSetting() {
  return (
    <div>
      <div className="dormsetting">
        <div class="container mt-5 text-center">
          <div class="row">
            <div class="col-xl-9 col-md-8 mx-auto ">
              <h1 class="text-dark text-center">Dormitory Information</h1>
            </div>
          </div>
        </div>
        <div class="container pb-3">
          <div class="container mt-3 mb-2">
            <h5>Information & Address</h5>
          </div>
          <form method="POST" action="">
            <div
              class="container col-10 mb-3 pt-2 pb-3"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div class="row">
                <div class="col-xl-8 col-lg-6 col-md-6">
                  <label for="DormNameTH" class="form-label">
                    Dormitory Name (TH)
                  </label>
                  <input
                    name="DormNameTH"
                    type="text"
                    class="form-control"
                    id="DormNameTH"
                    placeholder="ตัวอย่าง: สราญสุข การเด้นท์คอร์ท"
                    required
                  />
                </div>
                <div class="col-xl-8 col-lg-6 col-md-6">
                  <label for="DormNameENG" class="form-label">
                    Dormitory Name (ENG)
                  </label>
                  <input
                    name="DormNameENG"
                    type="text"
                    class="form-control"
                    id="DormNameENG"
                    placeholder="ตัวอย่าง: Saransuk Gardencourt"
                    required
                  />
                </div>
                <div class="col-xl-8 col-lg-8 col-md-6">
                  <label for="Address" class="form-label">
                    Address
                  </label>
                  <textarea
                    name="Address"
                    class="form-control"
                    id="Address"
                    placeholder="บ้านเลขที่/อาคาร/หมู่บ้าน/ หมู่ที่"
                  ></textarea>
                </div>
                <div class="col-xl-8 col-lg-6 col-md-6">
                  <label for="Street" class="form-label">
                    Street
                  </label>
                  <input
                    name="Street"
                    type="text"
                    class="form-control"
                    id="Street"
                    required
                  />
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <label for="Subdistrict" class="form-label">
                    Subdistrict
                  </label>
                  <input
                    name="Subdistrict"
                    type="text"
                    class="form-control"
                    id="Subdistrict"
                    required
                  />
                </div>
                <div class="col-xl-6 col-lg-4 col-md-6">
                  <label for="District" class="form-label">
                    District
                  </label>
                  <input
                    name="District"
                    type="text"
                    class="form-control"
                    id="District"
                    required
                  />
                </div>
                <div class="col">
                  <label for="Postcode" class="form-label">
                    Postal Code
                  </label>
                  <input
                    name="Postcode"
                    type="text"
                    class="form-control"
                    id="Postcode"
                    required
                  />
                </div>
                <div class="col">
                  <label for="Province" class="form-label">
                    Province
                  </label>
                  <select id="Province" class="form-select">
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
            <div class="container mt-3 mb-2">
              <h5>Building Setting</h5>
            </div>
            <div
              class="container col-10 mb-3 pt-2 pb-3"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div class="row">
                <div class="col-xl-6 col-lg-4 col-md-4">
                  <label for="BuidingName" class="form-label">
                    Building Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="BuidingName"
                    placeholder="ตัวอย่าง: สราญสุข"
                    required
                  />
                </div>
                <div clas="col-xl-6 col-lg-4 col-md-4">
                  <label for="NumofBuilding" class="form-label">
                    Amount of Building
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="NumofBuilding"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="container mt-3 mb-2">
              <h5>Utitilities Setting</h5>
            </div>

            <div
              class="container col-10 pt-2 pb-3 mb-2"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div class="row justify-content-start">
                <div class="col-4">
                  <label for="inputPriceperUnit" class="form-label">
                    Price/Unit
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPriceperUnit"
                    required
                  />
                </div>
                <div class="col-4">
                  <label for="inputMinimumUnit" class="form-label">
                    Minimum Unit
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputMinimumUnit"
                    required
                  />
                </div>
                <div class="col-4">
                  <label for="inputMinimumPrice" class="form-label">
                    Minimum Price
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputMinimumPrice"
                    required
                  />
                </div>
              </div>
            </div>
            <div
              class="container col-10 pt-2 pb-3 mb-2"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <div class="col-4">
                <label for="inputMinimumPrice" class="form-label">
                  Minimum Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputMinimumPrice"
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
              Save
            </button>
          </form>
        </div>
      </div>
      );
    </div>
  );
}
