import axios from "axios";
// ACTION TYPES;
const FETCH_ALL_USERS = "FETCH_ALL_USERS";
const ADD_USER = "ADD_USER";
const EDIT_USER = "EDIT_USER";
const DELETE_USER = "DELETE_USER";
const SUCCESS="SUCCESS";
const ADD_USER_ENTITY="ADD_USER_ENTITY";
const CONFIRM_USER_ENTITY="CONFIRM_USER_ENTITY";
// ACTION CREATORS;
const fetchAllUser = (users) => {
  return {
    type: FETCH_ALL_USERS,
    payload: users,
  };
};

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const addUserEntity=(user)=>{
  return{
    type:ADD_USER_ENTITY,
    payload:user
  };
};


const confirmUserEntity=(user)=>{
  return{
    type:CONFIRM_USER_ENTITY,
    payload:user
  };
};

const editUser = (user) => {
  return {
    type: EDIT_USER,
    payload: user,
  };
};

const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

// THUNK CREATORS;
export const fetchAllUsersThunk = () => (dispatch) => {
  return axios
    .get("http://localhost:8080/alluser")
    .then((res) => res.data)
    .then((users) => dispatch(fetchAllUser(users)))
    .catch((err) => console.log(err));
};
/*export const fetchAuthenticateThunk =()=>(dispatch)=>{
  return axios.
}*/

export const addUserThunk = (user, ownProps) => (dispatch) => {
console.log(user)

  return axios
    .post("http://localhost:8080/register", user)
    .then((res) => res.data)
    .then((newUser) => {
      const tweakedUser = { ...newUser, items: [] };
      dispatch(addUser(tweakedUser));
    //  ownProps.history.push(`/users/${newUser.id}`);
    })
    .catch((err) => console.log(err));
};

export const editUserThunk = (user) => (dispatch) => {
  console.log(user);
  return axios
    .put(`http://localhost:8080/updateuser`, user)
    .then((res) => res.data)
    .then((updatedUser) => {
      dispatch(editUser(updatedUser));
    })
    .catch((err) => console.log(err));
};

export const deleteUserThunk = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:8080/candidates/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteUser(id)))
    .catch((err) => console.log(err));
};
export const addUserEntityThunk = (user, ownProps) => (dispatch) => {
  console.log(user)
  const config={headers: {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"}} 
    return axios
      .post("http://localhost:8080/emailregister", user,config)
      .then((res) =>{ 
        dispatch(addUserEntity(res.data));
        
      }
        )
      
      .catch((err) => console.log(err));
  };


  export const confirmUserEntityThunk = (token, ownProps) => (dispatch) => {
    console.log(token);
    const url="http://localhost:8080/confirm-account?token="+token
    const config={headers: {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"}} 
      return axios
        .post(url, token,config)
        .then((res) =>{ 
          dispatch(confirmUserEntity(res.data));
          
        }
          )
        
        .catch((err) => console.log(err));
    };
// REDUCER;
const reducer = (state = [], action) => {
  console.log(action)
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action;
    case ADD_USER:
      return [...state, action.payload];
    case EDIT_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action : user
      );
    case ADD_USER_ENTITY:
      return action;
    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);
    case SUCCESS:
        return action;
        case CONFIRM_USER_ENTITY:
          return action;  
    default:
      return state;
  }
};

export default reducer;
