import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Footer from "./Footer";

const Layout = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const clickMenuToggler = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img src={logo} alt="" height="50px" />
            <span
              className="navbar-toggler"
              onClick={clickMenuToggler}
            >
              <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7H7M20 7H11M20 17H17M4 17H13M4 12H20" stroke="black" stroke-width="1.5" stroke-linecap="round" />
              </svg>

            </span>
            <div className={`responsive-menu${toggleMenu ? " menu-in" : " menu-out"}`}>
              <span onClick={clickMenuToggler} className="responsive-close">
                <svg viewBox="0 0 50 50" width="25px" height="25px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" /></svg>
              </span>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" onClick={clickMenuToggler}>
                  <NavLink className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" onClick={clickMenuToggler}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item" onClick={clickMenuToggler}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/menu"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item" onClick={clickMenuToggler}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item" onClick={clickMenuToggler}>
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbars-rs-food">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" activeClassName="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/menu"
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
      <Footer data={props.data} />
    </>
  );
};

export default Layout;
