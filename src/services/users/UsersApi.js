import { request } from '../../utils/api';
import { baseUrl } from '../../utils/constants';

export const getUsers = () => {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/users`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getUser = (data) => {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/users/${data.id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
