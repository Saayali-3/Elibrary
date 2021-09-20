import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {authenticateUser} from '../../thunks/index';
import { LoginFormView } from "../views";

class LoginFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isValidUser: false,
      errors: {},
    };
  }


  handleChange = (e) => {
   
      this.setState({
        [e.target.name]: e.target.value,
      });
    
  };

  validateUser = () => {
    this.props.authenticateUser(this.state.username, this.state.password);
    const users=this.props.auth;
    console.log(users)
    let errors = { ...this.state.errors };
   let id=5;
   setTimeout(() => {
          
    if(this.props.auth) {
     //   return this.props.history.push(`/users/${users[i].id}`);
     return this.props.history.push("/home");
    } else {
      errors.username = "Invalid username or password";
         
    }
    this.setState({ id,users, errors });
}, 500);
}
  handleSubmit = (e) => {
     e.preventDefault();
    this.validateUser()
  };
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <div className="text-danger">
        {this.state.isValidUser ?``: this.state.errors.username}
        </div>
        <LoginFormView
          username={this.state.username}
          password={this.state.password}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.allUsers.isLoggedIn)
    return {
        auth:state.allUsers.isLoggedIn
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
    };
};


LoginFormContainer.propTypes = {
    allUsers: PropTypes.array.isRequired,
    fetchAllUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);