import { request } from "../../utils/api";

 export function getToken (email, password)  {
  return request('http://localhost:8080/api/v1/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};


export function getProfile ()  {
  const token = localStorage.getItem('token');
  return request('http://localhost:8080/api/v1/users/info', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${  token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

  });
};

