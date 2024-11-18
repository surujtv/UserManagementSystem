import React, { useState, useEffect } from "react";
import { Form, Link } from "react-router-dom";
import { SIGNUP } from "./Constant";
import axios from "axios";

export default function SignUp() {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    state: "",
    pincode: "",
    city: "",
    gender: "Male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FormData);
    axios
      .post(SIGNUP, FormData)
      .then((response) => {
        console.log(response.data);
        alert("SignUp Successfully Done!!");
      })
      .catch((error) => {
        alert("Error", error);
      });
    setFormData({
      name: "",
      email: "",
      password: "",
      mobile: "",
      state: "",
      pincode: "",
      city: "",
      gender: "Male",
    });
  };

  return (
    <div>
      <div>
        <div className="container-fluid d-none d-lg-block">
          <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
              <a href="" className="text-decoration-none">
                <h3 className="m-0">
                  <span className="text-primary">USER</span>MANAGEMENT
                </h3>
              </a>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                <div className="text-left">
                  <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                  <small>123 Street, New York, USA</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
                <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                <div className="text-left">
                  <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                  <small>info@example.com</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-right">
              <div className="d-inline-flex align-items-center">
                <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                <div className="text-left">
                  <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                  <small>+012 345 6789</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Navigation  */}
        <div className="container-fluid">
          <div className="row border-top px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
              <nav
                className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                id="navbar-vertical"
                style={{ width: "calc(100%-30)", zIndex: 9 }}
              ></nav>
            </div>
            <div className="col-lg-9">
              <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href="" className="text-decoration-none d-block d-lg-none">
                  <h1 className="m-0">
                    <span className="text-primary">USER</span>MANAGEMENT
                  </h1>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarCollapse"
                >
                  <div className="navbar-nav py-0">
                    <Link to="/" className="nav-item nav-link">
                      Home
                    </Link>

                    <a href="/about" className="nav-item nav-link">
                      About
                    </a>
                    <Link to="/signin" className="nav-item nav-link ">
                      SignIn
                    </Link>

                    <Link to="/signup" className="nav-item nav-link active">
                      SignUp
                    </Link>

                    <Link to="/contact" className="nav-item nav-link">
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* Stop Navigation */}
      </div>
      {/* Start Form */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-form bg-secondary rounded p-5">
            <div id="success"></div>
            <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  id="name"
                  placeholder="Name"
                  required="required"
                  data-validation-required-message="Please enter  name"
                  name="name"
                  value={FormData.name}
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control border-0 p-4"
                  id="email"
                  placeholder="Email"
                  required="required"
                  data-validation-required-message="Please enter  email"
                  name="email"
                  value={FormData.email}
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="password"
                  className="form-control border-0 p-4"
                  id="password"
                  placeholder="Password"
                  required="required"
                  data-validation-required-message="Please enter  password"
                  name="password"
                  value={FormData.password}
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  id="mobile"
                  placeholder="Mobile"
                  required="required"
                  data-validation-required-message="Please enter  mobile"
                  name="mobile"
                  value={FormData.mobile}
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="form-check">
                  <input
                    className="form-check-input specifyColor"
                    type="radio"
                    id="flexRadioDefault1"
                    name="gender"
                    onChange={handleChange}
                    value="Male"
                    checked={FormData.gender === "Male"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input specifyColor"
                    type="radio"
                    id="flexRadioDefault2"
                    name="gender"
                    onChange={handleChange}
                    value="Female"
                    checked={FormData.gender === "Female"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input specifyColor"
                    type="radio"
                    id="flexRadioDefault3"
                    name="gender"
                    onChange={handleChange}
                    value="Other"
                    checked={FormData.gender === "Other"}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Other
                  </label>
                </div>
              </div>
              <div className="form-group">
                <select
                  className="custom-select border-0 px-4"
                  style={{ height: 47 }}
                  name="state"
                  value={FormData.state}
                  onChange={handleChange}
                >
                  <option>Select a State</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharastra">Maharastra</option>
                  <option value="Gujrat">Gujrat</option>
                </select>
              </div>
              <div className="form-group">
                <select
                  className="custom-select border-0 px-4"
                  style={{ height: 47 }}
                  name="city"
                  value={FormData.city}
                  onChange={handleChange}
                >
                  <option>Select a City</option>

                  <option value="Indore">Indore</option>
                  <option value="Ujjain">Ujjain</option>
                  <option value="Bhopal">Bhopal</option>

                  <option value="Mumbai">Mumbai</option>
                  <option value="Thane">Thane</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>

              <div className="control-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  id="pincode"
                  placeholder="Pincode"
                  required="required"
                  data-validation-required-message="Please enter  pincode"
                  name="pincode"
                  value={FormData.pincode}
                  onChange={handleChange}
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary py-3 px-5"
                  type="submit"
                  id="sendMessageButton"
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Form */}
    </div>
  );
}
