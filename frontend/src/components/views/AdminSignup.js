import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/Adminsignup.css"
import Logo from "./styles/Logo.png"

const AdminSignup = (props) => {
  return (
    <div className="adminregister">
         {/* Logo */}
			  <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="login__logo"
                />
            </Link>
      <div className="adminregister__container">
      <h1 >Admin Sign Up</h1>
      

      <form  onSubmit={props.handleSubmit}>
      <br/>
     
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
   
        
        <br/>
        <button className="adminregister__signUpButton" >Signup</button>
      </form>
      <br/>

      <Link to="/admin">Already have an account? Click here</Link>
      </div>
      </div>
 
  );
};

AdminSignup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AdminSignup;

   
