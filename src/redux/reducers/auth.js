import ActionsTypes from '../ActionTypes';
import LoginStatus from '../../constants/LoginStatus';

const initialState = {
  userId: null,
  loginStatus: LoginStatus.CHECKING,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.LOGIN:
      return {
        userId: action.payload.userId,
        loginStatus: LoginStatus.LOGGEDIN,
      };

    case ActionsTypes.AUTOLOGINSUCCESS:
      return {
        userId: action.payload.userId,
        loginStatus: LoginStatus.LOGGEDIN,
      };

    case ActionsTypes.LOGOUT:
      return {
        userId: null,
        loginStatus: LoginStatus.LOGGEDOUT,
      };

    case ActionsTypes.AUTOLOGINFFAILED:
      return {
        userId: null,
        loginStatus: LoginStatus.LOGGEDOUT,
      };

    default:
      return state;
  }
};

export default AuthReducer;
