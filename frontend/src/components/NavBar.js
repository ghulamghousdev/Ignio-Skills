import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="row nav__row">
        <div className="nav__logo">
          Ignio<span className="nav__logo nav__logo--highlight">Skills</span>
        </div>
        <form className="nav__search">
          <input
            className="nav__input"
            type="text"
            placeholder="... search"
            name="search"
          />
        </form>
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <Link className="nav__btn nav__btn--outlined" to="/login">
              Login
            </Link>
          </li>
          <li className="nav__menu-item">
            <Link className="nav__btn nav__btn--filled" to="/signup">
              Join
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
