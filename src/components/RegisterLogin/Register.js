import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";

import "./Register.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6) {
    return (
      <div className="alert alert-danger" role="alert">
        Password needs to be 6 characters or more.
      </div>
    );
  }
};
const vfname = (value) => {
  if (value.length <= 0) {
    return (
      <div className="alert alert-danger" role="alert">
        Firstname is required!
      </div>
    );
  }
};
const vlname = (value) => {
  if (value.length <= 0) {
    return (
      <div className="alert alert-danger" role="alert">
        Lastname is required!
      </div>
    );
  }
};
const vtelno = (value) => {
  if (value.length <= 0) {
    return (
      <div className="alert alert-danger" role="alert">
        Telephone number is required!
      </div>
    );
  }
};
const vIDCardNo = (value) => {
  if (value.length !== 13) {
    return (
      <div className="alert alert-danger" role="alert">
        ID Card Number need to have 13 digits.
      </div>
    );
  }
};
const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [IDCardNo, setIDCardNo] = useState("");
  const [telno, setTelno] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const inputstyle = {
    maxWidth: "200px",
    width: "90%",
    maxHeight: "50px",
    height: "100%",
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeFname = (e) => {
    const fname = e.target.value;
    setFname(fname);
  };
  const onChangeLname = (e) => {
    const lname = e.target.value;
    setLname(lname);
  };
  const onChangeDob = (e) => {
    const dob = e.target.value;
    setDob(dob);
  };
  const onChangeIDCardNo = (e) => {
    const IDCardNo = e.target.value;
    setIDCardNo(IDCardNo);
  };
  const onChangeTelno = (e) => {
    const telno = e.target.value;
    setTelno(telno);
  };
  // const onChangeGender = (e) => {
  //   const gender = e.target.value;
  //   setGender(gender);
  // };
  const onChangeRole = (e) => {
    const role = e.target.value;
    setRole(role);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(email, password, fname, lname, telno))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
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
              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <Input
                            type="text"
                            className="form-control border-0"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                            placeholder="อีเมล"
                            style={inputstyle}
                          />
                        </div>
                        <div className="form-floating mb-3">
                          <Input
                            type="text"
                            className="form-control "
                            id="fname"
                            name="fname"
                            placeholder="ชื่อจริง"
                            value={fname}
                            onChange={onChangeFname}
                            validations={[required, vfname]}
                            style={inputstyle}
                            autofocus
                          />
                        </div>
                        <div className="form-floating mb-3">
                          <Input
                            type="text"
                            className="form-control "
                            id="IDCardNo"
                            name="IDCardNo"
                            placeholder="เลขบัตรประชาชน"
                            value={IDCardNo}
                            onChange={onChangeIDCardNo}
                            validations={[required, vIDCardNo]}
                            style={inputstyle}
                            autofocus
                          />
                        </div>
                        <div className="form-floating mb-2">
                          <Input
                            type="text"
                            className="form-control"
                            id="telno"
                            placeholder="เบอร์โทรศัพท์"
                            value={telno}
                            onChange={onChangeTelno}
                            validations={[required, vtelno]}
                            style={inputstyle}
                            autofocus
                          />
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-2 ">
                          <h6 className="mb-0 me-3">เพศ: </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <Input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="femaleGender"
                              value={gender}
                            />
                            <label
                              className="form-check-label"
                              for="femaleGender"
                            >
                              หญิง
                            </label>
                          </div>

                          <div className="form-check form-check-inline mt-2 mb-0 me-4">
                            <Input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="maleGender"
                              value={gender}
                            />
                            <label
                              className="form-check-label"
                              for="maleGender"
                            >
                              ชาย
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating mb-3">
                          <Input
                            type="text"
                            className="form-control border-0"
                            id="password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required, vpassword]}
                            style={inputstyle}
                            placeholder="รหัสผ่าน"
                          />
                        </div>

                        <div className="form-floating mb-3">
                          <Input
                            type="text"
                            className="form-control"
                            id="floatingInputLastname"
                            name="lname"
                            placeholder="นามสกุล"
                            value={lname}
                            onChange={onChangeLname}
                            validations={[required, vlname]}
                            style={inputstyle}
                            autofocus
                          />
                        </div>
                        <div>
                          <select
                            className=" form-select"
                            aria-label="Default select example"
                            onChange={onChangeRole}
                            style={inputstyle}
                            value={role}
                            required
                            autofocus
                          >
                            <option selected>เลือกตำแหน่ง...</option>
                            <option value="user">ผู้เช่า</option>
                            <option value="admin">พนักงาน</option>
                          </select>
                        </div>

                        <div className="form-floating mb-3">
                          <Input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            placeholder="ว/ด/ป เกิด"
                            value={dob}
                            onChange={onChangeDob}
                            style={inputstyle}
                            required
                            autofocus
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-grid mb-2">
                      <button
                        className="btn btn-lg btn-login fw-bold"
                        type="submit"
                        style={{
                          backgroundColor: "#C7E5F0",
                          fontSize: "0.9rem",
                          letterSpacing: "0.05rem",
                          padding: "0.75rem 1rem",
                        }}
                      >
                        ลงทะเบียน
                      </button>
                    </div>
                    <a className="d-block text-center mt-2 small" href="/login">
                      มีบัญชีผู้ใช้อยู่แล้ว ? เข้าสู่ระบบ
                    </a>

                    <hr className="my-4" />

                    <div className="d-grid mb-2">
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
                    </div>
                  </div>
                )}

                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { isEmail } from "validator";

// import { register } from "../actions/auth";

// import "../styles/Signup.css";
// import wallpaper from "../components/Navbar/images/wallpaper.jpeg";

// const required = (value) => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };

// const validEmail = (value) => {
//   if (!isEmail(value)) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This is not a valid email.
//       </div>
//     );
//   }
// };

// const vpassword = (value) => {
//   if (value.length < 6) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         Password needs to be 6 characters or more.
//       </div>
//     );
//   }
// };
// const vfname = (value) => {
//   if (value == 0) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
// const vlname = (value) => {
//   if (value == 0) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         This field is required!
//       </div>
//     );
//   }
// };
// const vtelno = (value) => {
//   if (!value.telno.trim()) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         Telephone number is required!
//       </div>
//     );
//   }
// };
// const Register = () => {
//   const form = useRef();
//   const checkBtn = useRef();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [dob, setDob] = useState("");
//   const [telno, setTelno] = useState("");
//   const [successful, setSuccessful] = useState(false);

//   const { message } = useSelector((state) => state.message);
//   const dispatch = useDispatch();

//   const onChangeEmail = (e) => {
//     const email = e.target.value;
//     setEmail(email);
//   };

//   const onChangePassword = (e) => {
//     const password = e.target.value;
//     setPassword(password);
//   };

//   const onChangeFname = (e) => {
//     const fname = e.target.value;
//     setFname(fname);
//   };
//   const onChangeLname = (e) => {
//     const lname = e.target.value;
//     setLname(lname);
//   };
//   const onChangeDob = (e) => {
//     const dob = e.target.value;
//     setDob(dob);
//   };
//   const onChangeTelno = (e) => {
//     const telno = e.target.value;
//     setTelno(telno);
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();

//     setSuccessful(false);

//     form.current.validateAll();

//     if (checkBtn.current.context._errors.length === 0) {
//       dispatch(register(email, password, fname, lname, dob, telno))
//         .then(() => {
//           setSuccessful(true);
//         })
//         .catch(() => {
//           setSuccessful(false);
//         });
//     }
//   };

//   return (
//     <section className="h-50">
//       <div className="container py-1 h-50">
//         <div className="row d-flex justify-content-center align-items-center h-30">
//           <div className="col">
//             <div
//               className="card card-registration my-2"
//               style={{ backgroundColor: "#EAE7E2" }}
//             >
//               <div className="row g-0" style={{ maxHeight: "1000px" }}>
//                 <div className="col-xl-4 d-none d-xl-block">
//                   <img
//                     src={wallpaper}
//                     alt="photo"
//                     className="img-fluid"
//                     style={{
//                       borderTopLeftRadius: ".25rem",
//                       borderBottomLeftRadius: ".25rem",
//                       maxHeight: "1000px",
//                       maxWidth: "500px",
//                       width: "100%",
//                       height: "100%",
//                     }}
//                   />
//                 </div>
//                 <div className="col-xl-8">
//                   <div className="card-body p-md-3 text-black">
//                     <h3 className="mb-3 text-uppercase text-center mt-3">
//                       Register with Adorminis
//                     </h3>
//                     <Form onSubmit={handleRegister} ref={form}>
//                       {!successful && (
//                         <div className="container px-4 mt-2 mb-4">
//                           <div className="row">
//                             <div className="col borderless">
//                               <button
//                                 type="submit"
//                                 className="btn-gg"
//                                 style={{
//                                   backgroundColor: "#CD5642",
//                                 }}
//                               >
//                                 Google
//                               </button>
//                             </div>
//                             <div className="col borderless">
//                               <button
//                                 type="submit"
//                                 className="btn-fb"
//                                 style={{
//                                   backgroundColor: "#415993",
//                                 }}
//                               >
//                                 Facebook
//                               </button>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="col-md-6 mt-3">
//                               <div className="form-outline">
//                                 <label className="form-label" for="fname">
//                                   Firstname
//                                 </label>
//                                 <Input
//                                   type="text"
//                                   id="form3Example1m"
//                                   className="form-control form-control-md border"
//                                   name="fname"
//                                   placeholder="firstname"
//                                   value={fname}
//                                   onChange={onChangeFname}
//                                   validations={[required, vfname]}
//                                 />
//                               </div>
//                             </div>
//                             <div className="col-md-6 mt-3">
//                               <div className="form-outline">
//                                 <Input
//                                   type="text"
//                                   id="form3Example1n"
//                                   className="form-control form-control-md border"
//                                   name="lname"
//                                   placeholder="lastname"
//                                   value={lname}
//                                   onChange={onChangeLname}
//                                   validations={[required, vlname]}
//                                 />
//                                 <label className="form-label" for="lname">
//                                   Last name
//                                 </label>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="row">
//                             <div className="col-md-6 mb-2">
//                               <div className="form-outline">
//                                 <Input
//                                   type="text"
//                                   id="form3Example1m1"
//                                   className="form-control form-control-md border"
//                                   name="email"
//                                   value={email}
//                                   onChange={onChangeEmail}
//                                   validations={[required, validEmail]}
//                                 />
//                                 <label
//                                   className="form-label"
//                                   for="form3Example1m1"
//                                 >
//                                   Email
//                                 </label>
//                               </div>
//                             </div>
//                             <div className="col-md-6 mb-2">
//                               <div className="form-outline">
//                                 <Input
//                                   type="text"
//                                   id="form3Example1n1"
//                                   className="form-control form-control-md border"
//                                   name="password"
//                                   value={password}
//                                   onChange={onChangePassword}
//                                   validations={[required, vpassword]}
//                                 />
//                                 <label
//                                   className="form-label"
//                                   for="form3Example1n1"
//                                 >
//                                   Password
//                                 </label>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row">
//                             <div className="col-md-4 form-outline mb-0">
//                               <Input
//                                 type="date"
//                                 id="form3Example9"
//                                 className="form-control form-control-md border"
//                                 name="dob"
//                                 value={dob}
//                                 onChange={onChangeDob}
//                                 required
//                               />
//                               <label className="form-label" for="form3Example9">
//                                 DOB
//                               </label>
//                             </div>
//                             <div className="col-md-4 mb-2">
//                               <select
//                                 class=" form-select form-select-md form-outline border mb-3"
//                                 aria-label=".form-select-md example"
//                               >
//                                 <option selected>Select your Role</option>
//                                 <option value="1">Resident</option>
//                                 <option value="2">Manager</option>
//                                 <option value="3">Owner</option>
//                               </select>
//                             </div>

//                             <div className="col-md-4 form-outline mb-0">
//                               <Input
//                                 type="text"
//                                 id="form3Example9"
//                                 className="form-control form-control-md border"
//                                 name="telno"
//                                 value={telno}
//                                 onChange={onChangeTelno}
//                                 validations={[required, vtelno]}
//                               />
//                               <label className="form-label" for="form3Example9">
//                                 Telephone No.
//                               </label>
//                             </div>
//                           </div>

//                           <div className="d-md-flex justify-content-start align-items-center mb-2 py-2 ms-2">
//                             <h6 className="mb-0 me-3">Gender: </h6>

//                             <div className="form-check form-check-inline mb-0 me-4">
//                               <Input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="femaleGender"
//                                 value="option1"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 for="femaleGender"
//                               >
//                                 Female
//                               </label>
//                             </div>

//                             <div className="form-check form-check-inline mb-0 me-4">
//                               <Input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="maleGender"
//                                 value="option2"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 for="maleGender"
//                               >
//                                 Male
//                               </label>
//                             </div>

//                             <div className="form-check form-check-inline mb-0">
//                               <Input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="otherGender"
//                                 value="option3"
//                               />
//                               <label
//                                 className="form-check-label"
//                                 for="otherGender"
//                               >
//                                 Other
//                               </label>
//                             </div>
//                           </div>

//                           <div className="d-flex justify-content-end pt-3 bt-3">
//                             <button
//                               className="btn btn-lg ms-2 btn-block"
//                               style={{
//                                 borderTopLeftRadius: ".25rem",
//                                 borderBottomLeftRadius: ".25rem",
//                                 maxHeight: "50px",
//                                 maxWidth: "300px",
//                                 width: "100%",
//                                 height: "100%",
//                                 backgroundColor: "#C7E5F0",
//                                 boxShadow: "0px 4px 4px 0px #00000040",
//                               }}
//                             >
//                               Register
//                             </button>
//                           </div>
//                         </div>
//                       )}

//                       {message && (
//                         <div className="form-group">
//                           <div
//                             className={
//                               successful
//                                 ? "alert alert-success"
//                                 : "alert alert-danger"
//                             }
//                             role="alert"
//                           >
//                             {message}
//                           </div>
//                         </div>
//                       )}
//                       <CheckButton style={{ display: "none" }} ref={checkBtn} />
//                     </Form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Register;
