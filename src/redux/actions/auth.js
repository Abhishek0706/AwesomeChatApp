// type
// payload

import ActionTypes from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = userId => {
  saveUserData();
  return { type: ActionTypes.LOGIN, payload: { userId: userId } };
};

export const logout = () => {
  deleteData();
  return { type: ActionTypes.LOGOUT, payload: {} };
};

export const autoLogin = () => {
  return async dispatch => {
    const userData = await getUserData();
    if (userData) {
      dispatch({
        type: ActionTypes.AUTOLOGINSUCCESS,
        payload: { userId: userData.userId },
      });
    } else {
      dispatch({ type: ActionTypes.AUTOLOGINFFAILED, payload: {} });
    }
  };
};

const saveUserData = async userId => {
  await AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      userId,
    }),
  );
};

const getUserData = async () => {
  const userData = await AsyncStorage.getItem('userData');
  return JSON.parse(userData);
};

const deleteData = async () => {
  await AsyncStorage.removeItem('userData');
};
