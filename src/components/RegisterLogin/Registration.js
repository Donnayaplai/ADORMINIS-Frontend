import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../RegisterLogin/Register.css";

function Registration() {
  const buttonsubmit = {
    backgroundColor: "#C7E5F0",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    padding: "0.75rem 1rem",
  };
  const inputstyle = {
    maxWidth: "300px",
    width: "90%",
    height: "50px",
    border: "none",
    borderRadius: "4px",
    marginBottom: "10px",
    padding: "5px",
  };
  const errormessage = {
    color: "#FF0000",
    fontWeight: "bold",
  };
  const initialValues = {
    fname: "",
    lname: "",
    telno: "",
    gender: "",
    idcardno: "",
    email: "",
    password: "",
    role: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("Firstname is required!"),
    lname: Yup.string().required("Lastname is required!"),
    telno: Yup.number()
      .required("Telephone no. is required")
      .positive()
      .max(13),
    gender: Yup.string().required("Gender is required!"),
    idcardno: Yup.number().required("Required!").positive().min(13).max(13),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
    // confirmPassword: Yup.string().oneOf([Yup.ref("password"), null]),
    // role: Yup.string().required("Role is required."),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card flex-row my-2 border-0 shadow rounded-3 overflow-hidden">
            <div className="card-img-left d-none d-md-flex" />
            <div
              className="card-body p-4 p-sm-5"
              style={{ backgroundColor: "#EAE7E2" }}
            >
              <h3 className="card-title text-center mb-3 text-uppercase">
                Register with Adorminis
              </h3>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
              >
                <Form className="formContainer">
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <Field
                            autoComplete="off"
                            placeholder="อีเมล"
                            name="email"
                            style={inputstyle}
                          />
                          <br />
                          <ErrorMessage
                            name="email"
                            component="span"
                            style={errormessage}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <Field
                            autoComplete="off"
                            type="password"
                            name="password"
                            placeholder="รหัสผ่าน"
                            style={inputstyle}
                          />
                          <br />
                          <ErrorMessage
                            name="password"
                            component="span"
                            style={errormessage}
                          />
                        </div>

                        {/* <div className="form-group mb-3">
                          <Field
                            id="idcardno"
                            name="idcardno"
                            placeholder="เลขบัตรประชาชน"
                            style={inputstyle}
                          />
                          <ErrorMessage
                            name="idcardno"
                            component="span"
                            style={errormessage}
                          />
                        </div> */}
                        {/* <div className="form-group mb-3">
                          <Field
                            id="gender"
                            name="gender"
                            placeholder="ตัวอย่าง: ชาย/หญิง"
                            style={inputstyle}
                          />
                          <ErrorMessage
                            name="gender"
                            component="span"
                            style={errormessage}
                          />
                        </div> */}
                        {/* <div
                          className="form-group"
                          role="group"
                          aria-labelledby="my-radio-group"
                          name="gender"
                        >
                          เพศ: &nbsp; &nbsp;
                          <label>
                            &nbsp;
                            <Field type="radio" name="gender" value="male" />
                            &nbsp; ชาย
                          </label>
                          &nbsp; &nbsp; &nbsp;
                          <label>
                            <Field type="radio" name="gender" value="female" />
                            &nbsp; หญิง
                          </label>
                          <ErrorMessage
                            name="gender"
                            component="span"
                            style={errormessage}
                          />
                        </div> */}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <Field
                            autoComplete="off"
                            name="fname"
                            placeholder="ชื่อจริง"
                            style={inputstyle}
                          />
                          <br />
                          <ErrorMessage
                            name="fname"
                            component="span"
                            style={errormessage}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <Field
                            autoComplete="off"
                            name="lname"
                            placeholder="นามสกุล"
                            style={inputstyle}
                          />
                          <br />
                          <ErrorMessage
                            name="lname"
                            component="span"
                            style={errormessage}
                          />
                        </div>
                        {/* <div className="form-group mb-3">
                          <Field
                            id="telno"
                            name="telno"
                            placeholder="เบอร์โทรศัพท์"
                            style={inputstyle}
                          />
                          <br />
                          <ErrorMessage
                            name="telno"
                            component="span"
                            style={errormessage}
                          />
                        </div> */}
                        {/* <div className="form-group mb-3">
                          <Field
                            id="role"
                            name="role"
                            placeholder="ตัวอย่าง: ผู้เช่า/พน้กงาน"
                            style={inputstyle}
                          />
                          <br /> */}
                        {/* <Field
                            as="select"
                            name="role"
                            style={inputstyle}
                            required
                          >
                            <option selected>เลือกตำแหน่ง...</option>
                            <option value="user">ผู้เช่า</option>
                            <option value="admin">พนักงาน</option>
                          </Field> */}
                        {/* <ErrorMessage
                            name="role"
                            component="span"
                            style={errormessage}
                          />
                        </div> */}
                      </div>
                    </div>

                    <div className="d-grid mb-2">
                      <button
                        className="btn btn-lg btn-register fw-bold mt-3"
                        type="submit"
                        style={buttonsubmit}
                      >
                        ลงทะเบียน
                      </button>
                    </div>
                    <a className="d-block text-center mt-2 small" href="/login">
                      มีบัญชีผู้ใช้อยู่แล้ว ? เข้าสู่ระบบ
                    </a>

                    {/* <hr className="my-4" /> */}

                    {/* <div className="d-grid mb-2">
                      <button
                        className="btn btn-lg btn-google btn-login fw-bold"
                        type="submit"
                      >
                        <i className="fab fa-google me-2"></i> ดำเนินการต่อด้วย
                        Google
                      </button>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-lg btn-facebook btn-login fw-bold"
                        type="submit"
                      >
                        <i className="fab fa-facebook-f me-2"></i>
                        ดำเนินการต่อด้วย Facebook
                      </button>
                    </div> */}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
