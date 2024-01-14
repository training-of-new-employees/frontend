const getToken = () => {
  return localStorage.getItem('accessToken');
};

const setToken = (token) => {
  localStorage.setItem('accessToken', token);
};

const checkToken = () => {
  const token = getToken();
  if (!token) {
    return false;
  }
  return token;
};

export { getToken, setToken, checkToken };
