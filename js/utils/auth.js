import { Authorize } from '../models/loginModel.js';
import { getToken, clearToken, isTokenExpired } from './token.js';

// Logger brugeren ud og omdirigerer til login-siden
export const logout = () => {
  clearToken();
  if (!window.location.pathname.includes('/login')) {
    window.location.href = '/index.html#/login';
  }
};

// Kontrollerer om brugeren er logget ind (token + servervalidering)
export const isLoggedIn = async () => {
  const token = getToken();

  if (!token?.accessToken) {
    return false;
  }

  if (isTokenExpired(token.accessToken)) {
    logout();
    return false;
  }

  try {
    const response = await Authorize();
    if (!response) {
      logout();
      return false;
    }
    return true;
  } catch {
    // Stil fejl ved netværksproblemer — brugeren logges ikke ud
    return false;
  }
};
