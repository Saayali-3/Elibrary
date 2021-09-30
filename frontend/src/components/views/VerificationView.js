import React from 'react';
import { connect } from "react-redux";
import "./styles/verification.css"
import { Link } from 'react-router-dom';
import Logo from "./styles/Logo.png"

import {addUserEntityThunk, addUserThunk,fetchAllUsersThunk } from "../../thunks";
class UploadFile extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {file: '', message: '',show:false,email:"",userEntity:[]
	};
	}
	componentDidMount(){
		this.props.fetchAllUsers()
	}
	onEmailChange=(event)=>{
		this.setState({
			email:event.target.value
		})
		this.props.fetchAllUsers()
	}
	onFileChange = (event) => {
		this.setState({
			file: event.target.files[0]
		});
		this.props.fetchAllUsers()
	}
	
	uploadFileData = (event) => {
		this.props.fetchAllUsers()
		event.preventDefault();
		this.setState({message: ''});
		
		
		  this.postFile();
	  
	}


	validateUser = () => {
		//check is the username length great than 5 and not duplicate username in database
		const allusers =this.props.allUsers;
		console.log(allusers.type)
		if(allusers.type==="FETCH_ALL_USERS"){			
			var users= allusers.payload;			
			var userEn=[];
			console.log(this.state.email)
			var i=this.state.email;
			userEn=users.filter(function(item){
				console.log(item.email,i)
			  return  item.email === i;
		   }).map(function({username,email,is_Enabled,password}){
			  return {username,email,is_Enabled,password};
			})
			
		   this.setState(
			   {
				   userEntity:userEn
			   }
		   )
		  console.log(this.state.userEntity,userEn);
		   this.props.addUserEntity(userEn[0]).then(
			  ()=>{
			this.success()
			console.log("test",this.state)
			  }
		   
			
		   )
		 
		  
		
		}
	
		
	console.log(users)
	  //let isValidName = true;
	// userEn=users[i].email;
	
	
	  
	  
	};
	postFile(){
		var fileUpload;
		let data = new FormData();
		data.append('file', this.state.file);
		console.log(this.state.file);
		/*for(var pair of data.entries()){
			console.log(pair[0]+','+pair[1]);
			fileUpload += pair[1];
		};*/
		console.log(fileUpload);
	//	var ba_token="Bearer "+token;
		fetch(`http://localhost:8080/upload`, {
			method: 'POST',
			body:data,
			headers:{
				"Access-Control-Allow-Origin":'http://localhost:8080',
				"Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"
			}
		}).then(response => {

			this.setState({message: "File successfully uploaded"});
		}).catch(err => {
			this.setState({error: err});
		});

	}
	success(){
		const allusers =this.props.allUsers;
		const users=allusers.payload;
		console.log(allusers.type)
		if(allusers.type=="ADD_USER_ENTITY"){
		
			var message= allusers.payload.message;
			console.log(message)
			this.setState({
				message:message,
				show:true
			}
			)			
	}
	//this.props.history.push("/login");
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.validateUser();
	  };
	
	render() {
		console.log(this.state)
		return (
			<div className="register">
			  {/* Logo */}
			  <Link to='/'>
                <img alt="timer" src={Logo} 
                    className="login__logo"
                />
            </Link>
			<div className="register__container">
			 
			 <h1 className="h3 mb-3 font-weight-normal">Verification Process</h1>
			 
			 <form className="form-signin" onSubmit={this.handleSubmit}>
			 <br/>
			   
			 <div show={this.state.show}>
				 {this.state.message}
				
			 </div>
			
			 <h5>   Upload a File:{" "}</h5>
				 <input
				 className="form-control"
				   type="file"
				   value={this.file}
				   name="file"
				   onChange={this.onFileChange}
				   required
				 ></input>
				 <br/>
				 <button className="btn btn-secondary" disabled={!this.state.file} onClick={this.uploadFileData}>Upload</button>
			
			 
				
				<br/>
				
			<h5>   email:{" "}</h5>
				 <input
				 className="form-control"
				   type="email"
				   value={this.email}
				   name="email"
				   onChange={this.onEmailChange}
				   required
				 ></input>
			  
			   <br/>
			   <button className="register__signUpButton" to="/Confirm">Click here to verify</button>
			 </form>
		
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
	  
	  addUser: (User) => dispatch(addUserThunk(User, ownProps)),
	  addUserEntity: (userEntity) => dispatch(addUserEntityThunk(userEntity, ownProps)),
	};
  };
export default connect(mapState, mapDispatch)(UploadFile);

