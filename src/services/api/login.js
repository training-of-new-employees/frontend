import { baseUrl } from '../../utils/constants';

function login(email, password) {
  const request = fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  localStorage.setItem('accessToken', request.token);
  return request;
}

export default login;
