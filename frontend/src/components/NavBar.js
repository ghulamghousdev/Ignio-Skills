import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
const NavBar = () => {
  return (
    <div className="home-nav one-edge-shadow">
      <div className="home-row ">
        <div className="home-logo">Ignio Skills</div>
        <ul className="home-menu">
          <li className="home-menu__li">
            <Link className="home-menu__link home-menu__link--btn " to="/login">
              Login
            </Link>
          </li>
          <li className="home-menu__li">
            <Link className="home-menu__link home-menu__link--btn" to="/signup">
              Join
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
