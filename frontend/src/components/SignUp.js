import { useState } from "react";
import { register } from "../actions/auth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/SignUpPage.scss";

const SignUp = ({ register }) => {
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
    <div className="flex-va-center">
      <div className="auth-container">
        <form className="signup-form" onSubmit={(e) => onFormSubmit(e)}>
          <h2 className="signup-form__heading">Just Sign Up to continue</h2>
          <input
            className="signup-form__input"
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => onChange(e)}
          />
          <input
            className="signup-form__input"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            className="signup-form__input"
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
          <input
            className="signup-form__input"
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          <input
            className="signup-form__input"
            placeholder="Confirm Password"
            type="password"
            name="password2"
            value={password2}
            onChange={(e) => onChange(e)}
          />

          <input
            className="signup-form__btn"
            type="submit"
            name="submit"
            value="Sign Up"
          />
        </form>
        <div className="other-auth">
          <div className="other-auth__text">
            Already have account?{" "}
            <Link className="other-auth__link" to="/login">
              {" "}
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register })(SignUp);
