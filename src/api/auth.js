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
  const responseData = await response.json();
  if (response.ok) return [responseData, null];
  else return [null, responseData];
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
  const responseData = await response.json();
  if (response.ok) return [responseData, null];
  else return [null, responseData];
};

export { loginWithEmailandPassword, signupWithEmailandPassword };
