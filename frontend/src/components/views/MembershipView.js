import React from 'react';
import './styles/membership.css';

import { connect } from "react-redux";

import {editUserThunk,fetchAllUsersThunk } from "../../thunks";
class Membership extends React.Component {
	
constructor(props) {
		super(props);
		this.state = { userEntity:[]
	};
	}
	componentDidMount(){
		this.props.fetchAllUsers()
	}
	

	validateUser = (x) => {
		//check is the username length great than 5 and not duplicate username in database
		const allusers =this.props.allUsers;
		console.log(allusers.type)
		if(allusers.type==="FETCH_ALL_USERS"){			
			var users= allusers.payload;			
			var userEn=[];
			var i=this.props.user.username;
			const current = new Date();
			userEn=users.filter(function(item){
				if(x=="Silver"){
                    item.member_type=x;
					item.password=null;
                    item.member_validity=current.setDate(current.getDate() + (1*30));;
                }
				else if(x=="Gold"){
                    item.member_type=x;
					item.password=null;
                    item.member_validity=current.setDate(current.getDate() + (6*30));
                }
				if(x=="Platinum"){
                    item.member_type=x;
					item.password=null;
                    item.member_validity=current.setDate(current.getDate() + (12*30));
                }
			  return  item.username === i;
		   }).map(function({id,username,email,enabled,member_type,member_validity,phonenumber,user_type}){
			  return {id,username,email,enabled,member_type,member_validity,phonenumber,user_type};
			})
			
		   this.setState(
			   {
				   userEntity:userEn
			   }
		   )
        this.props.editUserEntity(userEn[0])
        }
	};
	

	  handleSubmit = (x,e) => {
		
	//	e.preventDefault();
	console.log(this.props.user)
	if(Object.entries(this.props.user).length==0){

	}else{
		this.validateUser(x);
	}
		//	this.props.history.push("/login");
		  };

  render() {
	console.log(this.state)
	return (

			<div style={{backgroundColor:"rgb(151, 203, 233)"}}>
				<br/>
<h1 style={{textAlign:"center",fontSize:"50px"}}>Membership Plan </h1>
<br/>
<div className="columns">
  <ul className="price">
    <li class="header" style={{backgroundColor:"rgb(240, 50, 50)"}}>SILVER</li>
   <li class="grey">100 Books Read</li>
	<li class="grey">Rs.100/Every Month</li>
	
    <li class="grey"></li>
	<button className="button" onClick={this.handleSubmit.bind(this,'Silver')}> Buy Now</button> 
  </ul>
  </div>

<div className="columns">
  <ul className="price">
    <li class="header" style={{backgroundColor:"rgb(139, 50, 240)"}}>GOLD</li>
    <li class="grey">1000 Books Read </li>
    <li class="grey">RS.450/Every Month</li>
	
    <li class="grey"></li>
	<button className="button" onClick={this.handleSubmit.bind(this,'Gold')}> Buy Now</button>

  </ul>
  </div>

<div className="columns">
  <ul className="price">
 
    <li class="header" style={{backgroundColor:"#C31F48"}}>PLATINUM</li>
    <li class="grey">10000 Books Read</li>
    <li class="grey">Rs.800/Every Month</li>
    <li class="grey"></li>
	<button className="button" onClick={this.handleSubmit.bind(this,'Platinum')}> Buy Now</button>

  </ul>
  </div>
</div>
		
	)
  }
}
const mapState = (state) => {
	console.log(state)
	
	return {
		allUsers: state.allUsers,
		user:state.user,
	  };
	
  };
  const mapDispatch = (dispatch, ownProps) => {
	return {
	  fetchAllUsers: () => dispatch(fetchAllUsersThunk()),
      editUserEntity:(user)=> dispatch(editUserThunk(user)),
	 // addUser: (User) => dispatch(addUserThunk(User, ownProps)),
	 // addUserEntity: (userEntity) => dispatch(addUserEntityThunk(userEntity, ownProps)),
	};
  }; 
export default connect(mapState, mapDispatch)(Membership);