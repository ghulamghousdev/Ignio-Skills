import { useState } from "react";
import "../styles/SignUpPage.scss";
import { register } from "../actions/auth";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SignUp = ({ isAuthenticated, register }) => {
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const { fullName, email, password, password2, username } = credentials;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
    } else {
      register(fullName, username, email, password);
    }
  };

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  return (
    <div>
      <form className="signupform" onSubmit={(e) => onFormSubmit(e)}>
        <h1 className="logo">IgnioSkills</h1>
        <hr />
        <h3 className="signupform__heading">Sign Up</h3>
        <input
          className="signupform__input"
          placeholder="Full Name"
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => onChange(e)}
        />
        <input
          className="signupform__input"
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          className="signupform__input"
          placeholder="Username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
        />
        <input
          className="signupform__input"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
        />

        <input
          className="signupform__input"
          placeholder="Confirm Password"
          type="password"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
        />

        <input
          className="signupform__btn"
          type="submit"
          name="submit"
          value="Sign Up"
        />
      </form>
      <div className="login">
        <div className="loginprompt">
          Already have account?{" "}
          <a className="link simple" href="/user/signup">
            {" "}
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(SignUp);
