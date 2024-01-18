import { request } from '../../utils/api';
import { baseUrl } from '../../utils/constants';

const pathPosition = `${baseUrl}/positions`;

export const fetchPositions = () => {
  const token = localStorage.getItem('token');
  return request(pathPosition, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchPosition = (id) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setPosition = (data) => {
  const token = localStorage.getItem('token');
  return request(pathPosition, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      archived: true,
      company_id: data.company_id,
      name: data.name,
    }),
  });
};

// TODO: Подумать, как из этих 2 экшенов сделать один

export const editPosition = (data) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/update/${data.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      archived: true,
      company_id: data.company_id,
      name: data.name,
    }),
  });
};

export const renamePosition = (data) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/update/${data.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      company_id: data.company_id,
      name: data.name,
    }),
  });
};

export const fetchPositionForCourses = (data) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${data.id}/courses`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
