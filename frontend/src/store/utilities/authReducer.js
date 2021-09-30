import { LOGIN_REQUEST, LOGOUT_REQUEST, SUCCESS, FAILURE } from "./authTypes";

const initialState = {
  username: "",
  isLoggedIn: "",
};

const reducer = (state = initialState, action) => {
    console.log(action)
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
      };
      case SUCCESS:
        console.log(action.payload.isLoggedIn)
        return action;
    case FAILURE:
      return action;
    default:
      return state;
  }
};

export default reducer;