import axios from 'axios';

const apiKey = 'AIzaSyDyCyxRNsGLh1Q_Azi8PnWo2J2dfpddqo4';

const endpoints = {
  login:
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
  signup: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
};

const loginWithEmailandPassword = async (email, password) => {
  const response = await axios.request({
    method: 'POST',
    url: endpoints.login,
    headers: { 'Content-Type': 'application/json' },
    params: { key: apiKey },
    data: {
      email,
      password,
      returnSecureToken: true,
    },
  });
  if (response.status === 200) return [response.data, null];
  else return [null, response.data];
};

const signupWithEmailandPassword = async (email, password) => {
  const response = await axios.request({
    method: 'POST',
    url: endpoints.signup,
    headers: { 'Content-Type': 'application/json' },
    params: { key: apiKey },
    data: {
      email,
      password,
      returnSecureToken: true,
    },
  });
  if (response.status === 200) return [response.data, null];
  else return [null, response.data];
};

export { loginWithEmailandPassword, signupWithEmailandPassword };
