import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SignupFormView } from "../views";
import { addUserThunk,fetchAllUsersThunk } from "../../thunks";

class SignupFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      user_type:"user",
      phonenumber:"",
      isValidName: false,
      errors: {},
    };
  }
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleChange = (e) => {

      this.setState({
        [e.target.name]: e.target.value,
      });
  };

  validateUser = () => {
      //check is the username length great than 5 and not duplicate username in database
      const users=this.props.allUsers;
      console.log(users)
    const { username } = this.state;
    let errors = { ...this.state.errors };
    let isValidName = true;
    if (username.length < 5) {
      isValidName = false;
      errors.username = "Invalid username, please enter more than 4 characters";
    }
    for(let i=0;i<users.length;i++){
      if(this.state.username===users[i].username){
        isValidName = false;
        errors.username = "Invalid username, duplicate name";
       break;
     }
   }
    if (isValidName) {
      this.props.addUser(this.state)
      errors.username = "valid username";
      return this.props.history.push("/verification");
    }
    this.setState({ isValidName, errors });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validateUser();
  };
 
  render() {
    return (
      <>
        {/* Can potentially be extracted into its own ErrorMessage component */}
        <div className="text-danger">
        {this.state.isValidName ? "" : this.state.errors.username}
        </div>
        <SignupFormView
          username={this.state.username}
          password={this.state.password}
          email={this.state.email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
const mapState = (state) => {
  console.log(state)
  return {
    allUsers: state.allUsers.payload,
  };
};
const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
    addUser: (User) => dispatch(addUserThunk(User, ownProps)),
  };
};

SignupFormContainer.propTypes = {
  allUsers: PropTypes.array.isRequired,
  addUser: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(SignupFormContainer);