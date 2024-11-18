import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [HeaderContent, setHeaderContent] = useState();

  useEffect(() => {
    if (
      localStorage.getItem("role") === "admin" &&
      localStorage.getItem("token") != null
    ) {
      setHeaderContent(
        <>
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
                      <Link to="/admin" className="nav-item nav-link active">
                        Admin Home
                      </Link>

                      <Link
                        to="/admin/manageusers"
                        className="nav-item nav-link"
                      >
                        View & Manager Users
                      </Link>
                      <Link to="/admin/userpost" className="nav-item nav-link">
                        View Users Post
                      </Link>

                      {/* <Link to="/admin/changepassword" className="nav-item nav-link">ChangePassword</Link> */}
                      <Link to="/logout" className="nav-item nav-link">
                        Logout
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      );
    } else if (
      localStorage.getItem("role") === "user" &&
      localStorage.getItem("token") != null
    ) {
      setHeaderContent(
        <>
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
                      <Link
                        to="/user"
                        className="nav-item nav-link"
                      >
                        User Home
                      </Link>

                      <Link
                        to="/user/editprofile"
                        className="nav-item nav-link"
                      >
                        Edit Profile
                      </Link>

                      <Link
                        to="/user/changepassword"
                        className="nav-item nav-link"
                      >
                        ChangePassword
                      </Link>
                      <Link
                        to="/user/post"
                        className="nav-item nav-link"
                      >
                        ViewPost
                      </Link>
                      <Link
                        to="/user/addpost"
                        className="nav-item nav-link"
                      >
                        CreatePost
                      </Link>

                      <Link
                        to="/logout"
                        className="nav-item nav-link"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      navigate("/signin");
    }
  }, []);

  return HeaderContent;
}
