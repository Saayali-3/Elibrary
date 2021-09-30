import React from "react";
import PropTypes from "prop-types";
import "./styles/AdminLogin.css"
import { Link } from 'react-router-dom';
import Logo from "./styles/Logo.png"

const AdminLogin = (props) => {
  return (
    <div className="Adminlogin">
      {/* Logo */}
			  <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="Adminlogin__logo"
                />
            </Link>
      <div className="Adminlogin__container">
      
      <form  onSubmit={props.handleSubmit}>
      <h1 >Admin Login</h1>
      <br/>
       
       <h5 style={{textAlign:"left"}}>   User Name:{" "} </h5> 
          <input
         
            value={props.username}
            name="username"
            onChange={props.handleChange}
            required
          ></input>
      
      <h5 style={{textAlign:"left"}}>   Password:{" "} </h5> 
          <input
          
            value={props.password}
            type="password"
            name="password"
            onChange={props.handleChange}
            required
          ></input>
      
        <br/>
        
        <button  className="Adminlogin__signInButton">Login</button>
      </form>
      
      <Link   className="Adminlogin__RegisterButton" to="/adminsignup">Don't have an account? Sign up here</Link>
       </div>
    </div>
  );
};

AdminLogin.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default AdminLogin;


/*
<div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text" value={email} onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password" value={password} onChange={p => setPassword(p.target.value)}
                    />

                    <button
                        type="submit"
                        onClick={signIn}
                        className="login__signInButton">Sign In
                    </button>

                </form>
                
                <p>"To Sign Up, you need to read and agree to our Terms and virtusa intern's project E-Library 
                    virtusa intern's project E-Library virtusa intern's project E-Library Data Use Policy, including our Cookie Use."</p>

                <button
                    className="login__RegisterButton"
                    onClick={register}>
                    Click here to Create your new Account
                </button>
            </div>
*/