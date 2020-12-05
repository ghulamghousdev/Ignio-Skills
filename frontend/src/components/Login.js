import { React, useState } from "react";
import "../styles/LoginPage.scss";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";

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
    return <Redirect to="/" />;
  }

  return (
    <div className="flex-container">
      <form className="form" onSubmit={(e) => onFormSubmit(e)}>
        <h1 className="logo">IgnioSkills</h1>
        <hr />
        <h3 className="form__heading">Login</h3>
        <input
          className="form__input"
          type="text"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          placeholder="Username or email"
        />
        <input
          className="form__input"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          placeholder="Password"
        />

        <input
          className="form__btn"
          type="submit"
          name="submit"
          value="Login"
        />
      </form>
      <div className="register">
        <div className="register__text">
          Don't have account?{" "}
          <a className="link simple" href="/signup">
            {" "}
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
