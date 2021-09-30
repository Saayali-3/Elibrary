import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/signup.css"
import Logo from "./styles/Logo.png"

const SignupFormView = (props) => {
  return (
    <div className="register">
         {/* Logo */}
			  <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="login__logo"
                />
            </Link>
      <div className="register__container">
      <h1>Sign Up</h1>
      <br/>

      <form  onSubmit={props.handleSubmit}>
     
     
      <h5 style={{textAlign:"left"}}> User Name:{" "}</h5>
          <input
          
            value={props.username}
            name="username"
            onChange={props.handleChange}
            required
          ></input>
       
       
       <h5 style={{textAlign:"left"}}>   Password:{" "}</h5>
          <input
            value={props.password}
            type="password"
            name="password"
            onChange={props.handleChange}
            required
          ></input>
       
      
       <h5 style={{textAlign:"left"}}> Email:{" "} </h5>
          <input
            type="email"
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
    <h5 style={{textAlign:"left"}}>   Phone Number:{" "}</h5>
          <input
            value={props.phonenumber}
            type="text"
            name="phonenumber"
            onChange={props.handleChange}
            
          ></input>
        
        <br/>
        <button className="register__signUpButton" >Signup</button>
      </form>
      <br/>
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

   
