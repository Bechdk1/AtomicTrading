import { request } from '../utils/http.js';

// Logger brugeren ind med brugernavn og adgangskode
export const Authenticate = async (username, password) => {
  try {
    const data = await request('http://localhost:4000/api/auth/login', 'POST', { username, password });
    return data;
  } catch (error) {
    throw new Error('Login failed', { cause: error });
  }
};

// Tjekker om brugerens token stadig er gyldigt på serveren
export const Authorize = async () => {
  try {
    const data = await request('http://localhost:4000/api/auth/verify', 'GET');
    return data;
  } catch (error) {
    throw new Error('Authorization failed', { cause: error });
  }
};
