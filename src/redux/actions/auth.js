import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionTypes from '../ActionTypes';
import {
  loginWithEmailandPassword,
  signupWithEmailandPassword,
} from '../../api/auth';

export const authenticate = (email, password, signup = false) => {
  return async dispatch => {
    const response = signup
      ? await signupWithEmailandPassword(email, password)
      : await loginWithEmailandPassword(email, password);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }

    const responseData = await response.json();
    const userId = responseData.localId;
    const token = responseData.idToken;
    const expireTime = responseData.expiresIn * 1000;
    dispatch(setLogoutTimer(expireTime));
    saveUserData({ email, password });
    dispatch({
      type: ActionTypes.AUTHENTICATE,
      payload: { email, password, userId, token },
    });
  };
};

export const logout = () => {
  clearTimer();
  deleteUserData();
  return { type: ActionTypes.LOGOUT, payload: {} };
};

export const autoAuthenticate = () => {
  return async dispatch => {
    const userData = await getUserData();
    if (!userData) {
      dispatch(logout());
    } else {
      try {
        dispatch(authenticate(userData.email, userData.password));
      } catch (error) {
        dispatch(logout());
      }
    }
  };
};

// Token expiration functions

let timer;

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expireTime => {
  return async dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expireTime);
  };
};

// Async Storage functions

const saveUserData = async userData => {
  await AsyncStorage.setItem('userData', JSON.stringify(userData));
};

const getUserData = async () => {
  const userData = await AsyncStorage.getItem('userData');
  return JSON.parse(userData);
};

const deleteUserData = async () => {
  await AsyncStorage.removeItem('userData');
};
