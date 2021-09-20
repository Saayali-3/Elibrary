import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const SignupFormView = (props) => {
  return (
    <div className="center">
      <div className="text-center">
      
      <form className="form-signin" onSubmit={props.handleSubmit}>
      <h2 className="h3 mb-3 font-weight-normal">Sign Up</h2>
      <br/>
        <div>
          username:{" "}
          <input
          className="form-control"
            value={props.username}
            name="username"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Password:{" "}
          <input
          className="form-control"
            value={props.password}
            type="password"
            name="password"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
        email:{" "}
          <input
          className="form-control"
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <br/>
        <button className="btn btn-primary" >Signup</button>
      </form>
      <Link to="/login">Already have an account? Click here</Link>
      </div>
    </div>
  );
};

SignupFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SignupFormView;
