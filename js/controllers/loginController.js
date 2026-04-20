import { Authenticate } from '../models/loginModel.js';
import { isLoggedIn, logout } from '../utils/auth.js';
import { setCookie } from '../utils/cookies.js';
import { setLoginButton } from '../views/atomics/molecules.js';
import renderLoginPage from '../views/atomics/organisms/pages/loginPage.js';

export const loginController = () => {
  renderLoginPage();
};

export const handleLogin = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  // Nulstil tidligere fejlbeskeder
  form.username.setCustomValidity('');
  form.password.setCustomValidity('');

  const username = form.username.value.trim();
  const password = form.password.value;

  try {
    const data = await Authenticate(username, password);

    if (data.accessToken) {
      setCookie('sgtprepper_token', JSON.stringify(data));
      location.href = '/index.html';
    }
  } catch (error) {
    console.error(error);
  }
};

// Login/Logout-knap til header
export const renderLoginButton = async () => {
  const loggedIn = await isLoggedIn();
  const buttonTxt = loggedIn ? 'Log ud' : 'Log ind';

  const handleClick = () => {
    if (loggedIn) {
      logout();
      location.reload();
    } else {
      window.location.href = '/index.html#/login';
    }
  };

  return setLoginButton(buttonTxt, handleClick);
};
