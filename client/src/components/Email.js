import React, { useState, useEffect } from "react";
import Header from "./Header";
import { RESET_EMAIL } from "./Constant";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Email() {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    email: "",
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
      .post(RESET_EMAIL, FormData)
      .then((response) => {
        console.log(response.data);
        const { msg, id, token } = response.data;
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        alert(msg);
      })
      .catch((error) => {
        console.log(error);
        alert("Email is not Send");
      });
    setFormData({
      email: "",
    });
    // navigate("/forgotpassword")
  };
  return (
    <div>
      {/* <Header /> */}
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
        </div>
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

              <div className="text-center">
                <button
                  className="btn btn-primary py-3 px-5"
                  type="submit"
                  id="sendMessageButton"
                >
                  Send Email
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
