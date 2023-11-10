import React, { useState, useEffect } from "react";
import { BASE_URL } from "../services/apis";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from "../images/logo-dark.png";
import { useSelector } from "react-redux";
import { setToken } from "../slices/authSlice";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const [ismobile, setIsMobile] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.auth);
  const [categorydata, setCategorydata] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = (e) => {
    dispatch(setToken(null));
    localStorage.removeItem("token");
    toast.success("Logged Out");
    navigate("/");
  };
  useEffect(() => {
    fetch(`${BASE_URL}/showallcategory`)
      .then((response) => response.json())
      .then((data) => {
        setCategorydata(data?.data);
       
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        
      });
  }, []);
  return (
    <>
      <header className="nk-header">
        <div className="nk-header-main nk-menu-main will-shrink is-transparent ignore-mask">
          <div className="container">
            <div
              className="nk-header-wrap"
              onClick={() => setIsMobile(!ismobile)}
            >
              <div className="nk-header-logo">
                <Link to="/" className="logo-link">
                  <div className="logo-wrap">
                    <img className="logo-img logo-dark" src={logo} alt="" />
                  </div>
                </Link>
              </div>
              <div className="nk-header-toggle">
                <button
                  className={`btn btn-light btn-icon header-menu-toggle ${
                    ismobile ? "active" : ""
                  }`}
                >
                  <em className="icon ni ni-menu"></em>
                </button>
              </div>
              {ismobile ? (
                <div className="header-menu-overlay"></div>
              ) : (
                <div></div>
              )}
              <nav
                className={`nk-header-menu nk-menu ${
                  ismobile ? "menu-mobile header-menu-active" : ""
                } `}
              >
                <ul className="nk-menu-list mx-auto">
                  <li className="nk-menu-item has-dropdown">
                    <Link to="/" className="nk-menu-link">
                      <span className="nk-menu-text">Home</span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link to="/about-us" className="nk-menu-link">
                      <span className="nk-menu-text">About</span>
                    </Link>
                  </li>
                  <li className="nk-menu-item">
                    <Link to="/contact" className="nk-menu-link">
                      <span className="nk-menu-text">Contact us</span>
                    </Link>
                  </li>
                 




                  {categorydata.length > 0 ? (
                          categorydata.map((category) => (
                            <li
                              className="nk-menu-item"
                              key={category._id}
                              value={category._id}
                            >
                             <Link className="nk-menu-link" to={`/category/${category.name.toLowerCase()}`}>
                             <span className="nk-menu-text">{category.name}</span>
                                
                              </Link>
                            </li>
                          ))
                        ) : (
                          <li className="nk-menu-item">
                    
                      <span className="nk-menu-text">Loading</span>
      
                  </li>
                        )}
                 {
                  role === "admin" && <li className="nk-menu-item has-dropdown">
                    <a href="#" className="nk-menu-link nk-menu-toggle">
                      <span className="nk-menu-text">Posts</span>
                    </a>
                    <div className="nk-menu-dropdown">
                      <ul className="nk-menu-sub">
                        <li className="nk-menu-item">
                          <Link className="nk-menu-link" to="/allblogs">
                            ALL POST
                          </Link>
                        </li>
                        <li className="nk-menu-item">
                          <Link className="nk-menu-link" to="/addpost">
                            ADD POST
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>}
                </ul>
                <ul className="nk-menu-buttons flex-lg-row-reverse">
                  {token === null && (
                    <li>
                      <Link to="/submit" className="btn btn-primary">
                        Write for Us
                      </Link>
                    </li>
                  )}
                  {/* {token === null && (
                    <li>
                      <Link to="/login" className="link link-dark">
                        Login
                      </Link>
                    </li>
                  )} */}

                  {token !== null && (
                    <li>
                      <Link
                        onClick={(e) => {
                          logout(e);
                        }}
                        className="link link-dark"
                      >
                        Logout
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
