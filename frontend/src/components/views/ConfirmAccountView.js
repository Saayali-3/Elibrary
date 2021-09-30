import React from 'react';
import { connect } from "react-redux";
import {  useHistory } from 'react-router-dom';
import {confirmUserEntityThunk,fetchAllUsersThunk } from "../../thunks";
class ConfirmAccount extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { message: '',show:false
	};
	
	}
	componentDidMount(){
		var location=window.location.href;
		var splitToken=location.split('confirm-account?token=');
var token=splitToken[1];
var url="http://localhost:8080/confirm-account?token="+token;
console.log(location,token)

this.props.confirmUserEntity(token).then(
	()=>{
  this.success()
  
  console.log("test",this.state)
	})
	}
	


	success(){
		const allusers =this.props.allUsers;
		const users=allusers.payload;
		
		console.log(allusers.type)
		if(allusers.type==="CONFIRM_USER_ENTITY"){
		
			var message= allusers.payload.message;
			console.log(message)
			this.setState({
				message:message,
				show:true
			}
			)
	}
	}
	
	render() {
		return (
			 <div className="center">
			 <div className="text-center">
			 
		
			 <h2 className="h3 mb-3 font-weight-normal"><div show={this.state.show}>
				 {this.state.message}
			 </div></h2>
			 <br/>	
			 
			 
		
			 </div>
		   </div>
		)
	}

}

const mapState = (state) => {
	console.log(state)
	
	return {
		allUsers: state.allUsers,
	  };
	
  };
  const mapDispatch = (dispatch, ownProps) => {
	return {
	  fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
	  confirmUserEntity: (userEntity) => dispatch(confirmUserEntityThunk(userEntity, ownProps)),
	};
  };
  
export default connect(mapState, mapDispatch)(ConfirmAccount);