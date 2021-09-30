import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {authenticateUser,fetchAllUsersThunk} from '../../thunks/index';
import { AdminLogin } from "../views";

class AdminLoginContainer extends Component {
  constructor(props) {
   
    super(props);
    this.props.fetchAllUsers();
    this.state = {
      username: "",
      password: "",
      isValidUser: false,
      allUsers:[],
      errors: {},
    };
  }
componentDidMount(){
  this.props.fetchAllUsers();
}

  handleChange = (e) => {
    this.props.fetchAllUsers();
      this.setState({
        [e.target.name]: e.target.value,
      });
    
  };

  validateUser = () => {
    
    var users=this.props.auth;
    let errors = { ...this.state.errors };
   let id=5;
  var userEn=[];
  var i=this.state.username;
   setTimeout(() => {
   console.log(this.props.auth)
  
    if(this.props.auth) {
      console.log(this.props.auth)
      console.log(this.state.allUsers)
      userEn=this.state.allUsers.filter(function(item){
        return  item.username === i;
       }).map(function({id,username,email,enabled,password,member_type,member_validity,user_type}){
        return {id,username,email,enabled,password,member_type,member_validity,user_type};
      })
      console.log(userEn[0])
      if(userEn[0].user_type=="admin" && userEn[0].enabled==true){
        return this.props.history.push(`/users/${userEn[0].id}`);
       // return this.props.history.push("/approve");
      }
      else if(userEn[0].enabled!=true){
        errors.username = "Please contact admin for approval!";
      }
      else{
        errors.username = "You are not an admin user!";
      
      }
     //   return this.props.history.push(`/users/${users[i].id}`);
     
    } else {
      errors.username = "Invalid username or password";
         
    }
    this.setState({ id,users, errors });
}, 500);
}
  handleSubmit = (e) => {
     e.preventDefault();
     this.props.fetchAllUsers();
     this.setState(
       {
         allUsers:this.props.allusers
       }
     );
     this.props.authenticateUser(this.state.username, this.state.password);
     
  
    this.validateUser()
  };
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <div className="text-danger">
        {this.state.isValidUser ?``: this.state.errors.username}
        </div>
        <AdminLogin
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
  if(state.allUsers.type=="FETCH_ALL_USERS"){  
console.log(state)
    return  {
		allusers: state.allUsers.payload,
	  };
  }
    else if(state.allUsers.type=="SUCCESS" || state.allUsers.type=="FAILURE"){
    return {
        auth:state.allUsers.payload.isLoggedIn
    };
  }
};

const mapDispatchToProps = dispatch => {
    return {
      fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
        authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
        
	  
    };
};


AdminLoginContainer.propTypes = {
    allUsers: PropTypes.array.isRequired,
    fetchAllUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLoginContainer);