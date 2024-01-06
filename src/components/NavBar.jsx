import React, { useState } from "react";
import "../style.css";

function NavBar() {
  const [showHamburger, setShowHamburger] = useState(true);
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setShowHamburger(!showHamburger);
    setMenu(!menu);
  };
  const hideOverFlow = () => {
    setShowHamburger(!showHamburger);
    setMenu(!menu);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
        </a>
      </div>

      <div className={`${menu ? "nav-links" : "show-nav-links"}`}>
        <ul>
          <li>
            <a className="home-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={hideOverFlow}>
              About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={hideOverFlow}>
              Resume
            </a>
          </li>
          {/* <li>
            <a href="#services">Services onClick={hideOverFlow}</a>
          </li> */}
          <li>
            <a href="#skill" onClick={hideOverFlow}>
              Skills
            </a>
          </li>
          <li>
            <a href="#project" onClick={hideOverFlow}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={hideOverFlow}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`${showHamburger ? "mobile-nav" : "close-mobile"}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default NavBar;
