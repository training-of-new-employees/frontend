import { request } from '../../utils/api';
import { baseUrl } from '../../utils/constants';

const pathPosition = `${baseUrl}/admin/courses`;

export const fetchCourses = () => {
  const token = localStorage.getItem('token');
  return request(pathPosition, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchCoursesById = (id) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${id}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setCourses = (data) => {
  const token = localStorage.getItem('token');
  return request(pathPosition, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const editCourses = (data) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${data.id}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getCoursById = (id) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
