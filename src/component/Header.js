import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar">
          <img
            className="logo"
            src={process.env.PUBLIC_URL + "/img/shield_logo.png"}
            alt="uyc_logo"
          ></img>
          {/* <span id="moto-text">UNIVERSAL YOUTH CONNECT</span> */}
          <ul className="nav-links">
            <li class="nav-items" id="home">
              <NavLink to="/construction"> HOME </NavLink>
            </li>
            <li class="nav-items" id="about">
              <NavLink to="/construction"> ABOUT US </NavLink>
            </li>
            <li class="nav-items" id="events">
              <NavLink to="/construction"> EVENTS </NavLink>
            </li>
            <li class="nav-items" id="blogs">
              <NavLink to="/construction"> BLOG </NavLink>
            </li>
            <li class="nav-items" id="donate">
              <NavLink to="/construction"> DONATE </NavLink>
            </li>
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}

export default Header;
