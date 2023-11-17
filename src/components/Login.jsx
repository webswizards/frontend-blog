import React, { useState } from "react";
import LOGO from "../images/logo-dark.png";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/operations/authAPI";
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }
  return (
    <div>
      <div className="nk-app-root ">
        <main className="nk-pages">
          <div className="min-vh-100 d-flex flex-column has-mask">
            <div className="nk-mask bg-pattern-dot bg-blend-around"></div>
            <div className="text-center mt-6 mb-4">
              <a href="#" className="logo-link">
                <div className="logo-wrap">
                  <img className="logo-img logo-dark" src={LOGO} alt="" />
                </div>
              </a>
            </div>
            <div className="my-auto">
              <div className="container">
                <div className="row g-gs justify-content-center">
                  <div className="col-md-7 col-lg-6 col-xl-5">
                    <div className="card border-0 shadow-sm rounded-4">
                      <div className="card-body">
                        <h4 className="mb-3">Welcome Back!</h4>
                        <form action="#"   onSubmit={handleOnSubmit}>
                          <div className="row g-4">
                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                  htmlFor="email"
                                >
                                  Email or Username
                                </label>
                                <div className="form-control-wrap">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={handleOnChange}
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email or Username"
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="form-group">
                                <label
                                  className="form-label"
                                
                                >
                                  Password
                                </label>
                                <div className="form-control-wrap">
                                  <a
                                    href="#"
                                    className="form-control-icon end password-toggle"
                                    title="Toggle show/hide password"
                                  >
                                    <em className="on icon ni ni-eye text-base"></em>
                                    <em className="off icon ni ni-eye-off text-base"></em>
                                  </a>
                                  <input
                                    type="password"
                                    name="password"
                                    id="toggle-password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={handleOnChange}
                                    required
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="d-flex flex-wrap justify-content-between has-gap g-3">
                                <div className="form-group">
                                  <div className="form-check form-check-sm">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="rememberMe"
                                    />
                                    <label
                                      className="form-check-label"
                                     
                                    >
                                      {" "}
                                      Remember Me{" "}
                                    </label>
                                  </div>
                                </div>
                                <a href="#" className="small">
                                  Forgot Password?
                                </a>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-block"
                                  type="submit"
                                  id="submit-btn"
                
                                >
                                  Login
                                </button>
                              </div>
                            </div>
                            <div className="col-12 text-center">
                              <div className="small mb-3">or login with</div>
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

export default Login;
