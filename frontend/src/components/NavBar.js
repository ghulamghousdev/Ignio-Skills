import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import { connect } from "react-redux";
const NavBar = ({ isAuthenticated }) => {
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
        {!isAuthenticated ? (
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
        ) : (
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <Link
                className="nav__btn nav__btn--outlined"
                to="/mentordashboard"
              >
                Mentor
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link className="nav__btn nav__btn--filled" to="/student">
                Student
              </Link>
            </li>
            <li className="nav__menu-item">
              <Link className="nav__btn nav__btn--outlined" to="/">
                Logout
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(NavBar);
