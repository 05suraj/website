import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <header>
          {/* Header Start */}
          <div className="header-area">
            <div className="main-header  header-sticky">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-1">
                    <div className="logo">
                      <Link to="/">
                        <img src="assets/img/logo/logo.png" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="menu-main d-flex align-items-center justify-content-end">
                      <div className="main-menu f-right d-none d-lg-block">
                        <nav>
                          <ul id="navigation">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li>
                              <Link to="/service">Services</Link>
                            </li>
                            <li>
                              <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                              <a>Page</a>
                              <ul className="submenu">
                                <li>
                                  <Link to="/blog">Blog</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="header-right-btn f-right d-none d-xl-block ml-20">
                        <a href="#" className="btn header-btn">
                          Get Free Consultent
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Mobile Menu */}
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
