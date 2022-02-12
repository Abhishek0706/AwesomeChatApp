const apiKey = 'AIzaSyDyCyxRNsGLh1Q_Azi8PnWo2J2dfpddqo4';

const endpoints = {
  login:
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
  signup: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
};

const loginWithEmailandPassword = async (email, password) => {
  const response = await fetch(endpoints.login + '?key=' + apiKey, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
  return response;
};

const signupWithEmailandPassword = async (email, password) => {
  const response = await fetch(endpoints.signup + '?key=' + apiKey, {
    method: 'POST',

    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
      returnSecureToken: true,
    }),
  });
  return response;
};

export { loginWithEmailandPassword, signupWithEmailandPassword };
