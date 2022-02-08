import ActionTypes from '../ActionTypes';
import LoginStatus from '../../constants/LoginStatus';

const initialState = {
  userId: null,
  loginStatus: LoginStatus.CHECKING,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        userId: action.payload.userId,
        loginStatus: LoginStatus.LOGGEDIN,
      };

    case ActionTypes.AUTOLOGINSUCCESS:
      return {
        userId: action.payload.userId,
        loginStatus: LoginStatus.LOGGEDIN,
      };

    case ActionTypes.LOGOUT:
      return {
        userId: null,
        loginStatus: LoginStatus.LOGGEDOUT,
      };

    case ActionTypes.AUTOLOGINFFAILED:
      return {
        userId: null,
        loginStatus: LoginStatus.LOGGEDOUT,
      };

    default:
      return state;
  }
};

export default AuthReducer;
