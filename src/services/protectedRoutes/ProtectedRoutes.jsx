/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export const ProtectedRouteForSeller = ({ children }) => {
  const role = localStorage.getItem('role');
  return role === 'USER' ? children : <Navigate to="/" />;
};
export const ProtectedRouteForAdmin = ({ children }) => {
  const role = localStorage.getItem('role');
  return role === 'ADMIN' ? children : <Navigate to="/" />;
};

export const ProtectedRouteLoggedIn = ({ children }) => {
  const loggedIn = localStorage.getItem('token') !== null;
  return loggedIn ? children : <Navigate to="/" replace />;
};
