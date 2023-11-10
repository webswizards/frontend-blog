import React, { useState } from "react";
import Img from "../images/logo-dark.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const {name, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(name, email, password, navigate));
  };
  return (
    <div>
      <div className="nk-app-root ">
        <main className="nk-pages">
          <div className="min-vh-100 d-flex flex-column has-mask">
            <div className="nk-mask bg-pattern-dot bg-blend-around"></div>
            <div className="text-center mt-6 mb-4">
              <a href="index.html" className="logo-link">
                <div className="logo-wrap">
                  <img className="logo-img logo-dark" src={Img} alt="" />
                </div>
              </a>
            </div>
            <div className="my-auto">
              <div className="container">
                <div className="row g-gs justify-content-center">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <div className="card border-0 shadow-sm rounded-4">
                      <div className="card-body">
                        <h4 className="mb-3">Create an account</h4>
                        <form action="success-s2.html" onSubmit={handleOnSubmit} noValidate>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="fullname"
                                >
                                  Full Name
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={name}
                                    onChange={handleOnChange}
                                    className="form-control form-control-lg"
                                    placeholder="Your Name"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="emailaddress"
                                >
                                  Email Address
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    name="email"
                                    id="emailaddress"
                                    className="form-control form-control-lg"
                                    placeholder="name@copygen.com"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="toggle-password"
                                >
                                  Password
                                </label>
                                <div className="form-control-wrap">
                                  <a
                                    href="toggle-password"
                                    className="form-control-icon end password-toggle"
                                    title="Toggle show/hide password"
                                  >
                                    <em className="on icon ni ni-eye text-base"></em>
                                    <em className="off icon ni ni-eye-off text-base"></em>
                                  </a>
                                  <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={handleOnChange}
                                    id="toggle-password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex flex-wrap justify-content-between">
                                <div className="form-check form-check-sm">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="iAgree"
                                  />
                                  <label
                                    className="form-check-label small"
                                    htmlFor="iAgree"
                                  >
                                    {" "}
                                    I agree to <a href="#">
                                      privacy policy
                                    </a>{" "}
                                    &amp;{" "}
                                    <a href="terms-condition.html">terms</a>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-block"
                                  type="submit"
                                  id="submit-btn"
                    
                                >
                                  Create Account
                                </button>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <div className="small mb-3">or signup with</div>
                              <ul className="btn-list btn-list-inline gx-2">
                                <li>
                                  <a
                                    className="btn btn-light btn-icon"
                                    href="#"
                                  >
                                    <em className="icon fs-5 ni ni-facebook-f"></em>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="btn btn-light btn-icon"
                                    href="#"
                                  >
                                    <em className="icon fs-5 ni ni-google"></em>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="btn btn-light btn-icon"
                                    href="#"
                                  >
                                    <em className="icon fs-5 ni ni-apple"></em>
                                  </a>
                                </li>
                              </ul>
                              <p className="mt-4">
                                Already have an account?{" "}
                                <a href="login-s2.html">Login</a>
                              </p>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Register;
