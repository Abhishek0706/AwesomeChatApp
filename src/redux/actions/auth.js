import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionTypes from '../ActionTypes';

export const login = userId => {
  saveUserData(userId);
  return { type: ActionTypes.LOGIN, payload: { userId } };
};

export const logout = () => {
  deleteUserData();
  return { type: ActionTypes.LOGOUT, payload: {} };
};

export const autoLogin = () => {
  return async dispatch => {
    const userData = await getUserData();
    if (!userData) {
      dispatch({ type: ActionTypes.AUTOLOGINFFAILED, payload: {} });
    } else {
      dispatch({
        type: ActionTypes.AUTOLOGINSUCCESS,
        payload: { userId: userData.userId },
      });
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

const deleteUserData = async () => {
  await AsyncStorage.removeItem('userData');
};
