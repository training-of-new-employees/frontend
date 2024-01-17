import { baseUrl } from '../../utils/constants';

export function login(email, password) {
    return fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
  };

export default login;
