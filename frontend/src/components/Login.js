import { React, useState, Fragment } from "react";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect, Link } from "react-router-dom";
import "../styles/LoginPage.scss";

const Login = ({ login, isAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  if (isAuthenticated) {
    return <Redirect to="/mentor/create-course/heading" />;
  }

  return (
    <Fragment>
      <div className="flex-va-center">
        <div className="auth-container">
          <form className="login-form" onSubmit={(e) => onFormSubmit(e)}>
            <h2 className="login-form__heading">Just login to continue</h2>
            <input
              className="login-form__input"
              type="text"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              placeholder="Username or email"
            />
            <input
              className="login-form__input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              placeholder="Password"
            />

            <input
              className="login-form__btn"
              type="submit"
              name="submit"
              value="Login"
            />
          </form>
          <div className="other-auth">
            <div className="other-auth__text">
              Don't have account?{" "}
              <Link className="other-auth__link" to="/signup">
                {" "}
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
