import React from "react";
import PropTypes from "prop-types";
import "./styles/Login.css"
import { Link ,useHistory} from 'react-router-dom';
import Logo from "./styles/Logo.png"

const LoginFormView = (props) => {

  const history = useHistory();
  function register() {
      history.push("/admin");
  }
 
  return (
  
    <div className="login">
      {/* Logo */}
			
      <img alt="timer" src={Logo} 
                    className="login__logo"
                />
            
      <div className="login__container">
      <h1 >Login</h1>
      <br/>
      <form  onSubmit={props.handleSubmit}>
      
      
       
       
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
        <button  className="login__signInButton">Login</button>
        </form>
        <br/>
      <button
                    className="admin__LoginButton" onClick={register} >
                    
                    Click here If you are admin
                      </button>
                      <br/>
                      <p>"To Sign Up, you need to read and agree to our Terms and V-ReadersClub's project E-Library Data Use Policy, including our Cookie Use."</p>
                    

      <Link   className="login__RegisterButton" to="/signup">Don't have an account? Sign up here</Link>
      
     </div>
       
    </div>
  );
};

LoginFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default LoginFormView;


