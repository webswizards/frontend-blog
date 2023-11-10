import React from "react";
import IMG from "../images/logo-dark.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const Footer = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  
  useEffect(()=>{
    scrollToTop();
  },[location])
  return (
    <footer className="nk-footer">
      <div className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-3 col-sm-4 col-6">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  Categories
                </h6>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link to={'/category/development'}  className="link-base" href="#">
                      Dev
                    </Link>
                  </li>
                  <li>
                    <Link to={'/category/seo'} className="link-base">
                      Seo
                    </Link>
                  </li>
                  <li>
                    <Link to={'/category/testing'} className="link-base">
                      Testing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  About
                </h6>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link to={'/about'} className="link-base" >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to={'/submit'} className="link-base">
                    Guidelines 
                    </Link>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4 col-6">
              <div className="wgs">
                <h6 className="wgs-title overline-title text-heading mb-3">
                  WebsWizards
                </h6>
                <ul className="list gy-2 list-link-base">
                  <li>
                    <Link to={'/contact'} className="link-base" >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to={'/submit'} className="link-base" >
                      Submit Free Get Post
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-7 col-md-9 me-auto order-xl-first">
              <div className="block-text">
                <a href="index.html" className="logo-link mb-4">
                  <div className="logo-wrap">
                    <img className="logo-img logo-dark" src={IMG} alt="" />
                  </div>
                </a>
                <h4 className="title">
                  Unleash the Future of Content Creation!
                </h4>
                <p>
                 
WebSwizards is your go-to tech blog, offering insightful articles, tips, and updates on the latest in the world of technology.
                </p>
                <p className="text-heading mt-4">&copy; 2023 Webswizards. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
