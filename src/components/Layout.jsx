import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img src={logo} alt="" height="50px" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbars-rs-food"
              aria-controls="navbars-rs-food"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
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
