import * as actionTypes from "../actions/type";
import setAuthToken from "../utils/setAuthToken";
import history from "../history";

const initialUser = {
  user: {}
};

const user_reducer = (state = initialUser, action) => {
  switch (action.type) {
    case actionTypes.SIGNUP_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      setAuthToken(action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.SIGNIN_USER:
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      setAuthToken(action.payload.token);
      return {
        user: action.payload.user
      };
    case actionTypes.SIGNOUT_USER:
      localStorage.removeItem("user");
      history.push("/");
      return {
        ...state
      };
    case actionTypes.SET_CURRENT_USER:
      return {
        user: action.payload
      };
    default:
      return state;
  }
};

export default user_reducer;
