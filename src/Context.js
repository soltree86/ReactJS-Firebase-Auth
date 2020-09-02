import { createContext } from 'react';

export const setUserLocalStorage = (user) => {
  localStorage.removeItem('user');
  localStorage.setItem('user', user);
};

export const getUserLocalStorage = () => {
  return localStorage.getItem('user');
};

export const UserContext = createContext();
