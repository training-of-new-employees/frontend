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

export const getUser = (id) => {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/users/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getEditUserById = (data) => {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/users/${data.id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
  });
};

export const getLinkInvite = (email) => {
  const token = localStorage.getItem('token');
  return request(`${baseUrl}/invitation-link/${email}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

