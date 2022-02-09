import ActionsTypes from '../ActionTypes';
import AuthStatus from '../../constants/AuthStatus';

const initialState = {
  email: null,
  password: null,
  userId: null,
  token: null,
  authStatus: AuthStatus.CHECKING,
};

const AuthReducer = (state = initialState, action) => {
  const { email, password, userId, token } = action?.payload | {};
  switch (action.type) {
    case ActionsTypes.AUTHENTICATE:
      return {
        email,
        password,
        userId,
        token,
        authStatus: AuthStatus.LOGGEDIN,
      };

    case ActionsTypes.LOGOUT:
      return {
        ...initialState,
        authStatus: AuthStatus.LOGGEDOUT,
      };

    default:
      return state;
  }
};

export default AuthReducer;
