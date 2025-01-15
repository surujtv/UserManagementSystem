import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SIGNIN } from "./Constant";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    email: "",
    password: "",
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
    // console.log(FormData);
    axios
      .post(SIGNIN, FormData)
      .then((response) => {
        // console.log(response.data);
        const { name, email, role, _id, mobile, gender } = response.data.record;
        const { state, city, pincode } = response.data.record.address;
        const { token, success } = response.data;
        // console.log(token);
        if (success === true) {
          localStorage.setItem("_id", _id);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
          localStorage.setItem("mobile", mobile);
          localStorage.setItem("gender", gender);
          localStorage.setItem("state", state);
          localStorage.setItem("city", city);
          localStorage.setItem("pincode", pincode);
          localStorage.setItem("role", role);
          localStorage.setItem("token", token);
          {
            role === "user" ? navigate("/user") : navigate("/admin");
          }
        }
      })
      .catch((error) => {
        alert("Please enter correct email or password!!");
      });
    setFormData({
      email: "",
      password: "",
    });
  };
  
  const handleEmail = () => {
    navigate("/email");
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
                    <Link to="/signin" className="nav-item nav-link active">
                      SignIn
                    </Link>

                    <Link to="/signup" className="nav-item nav-link">
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
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div className="text-center">
                  <button
                    className="btn btn-primary py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    SignIn
                  </button>
                </div>
                <div className="text-center">
                  <button
                    className="btn 
                                btn-primary py-3 px-5"
                    onClick={handleEmail}
                    type="button"
                    id="sendMessageButton"
                  >
                    Forgot Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Form */}
    </div>
  );
}
