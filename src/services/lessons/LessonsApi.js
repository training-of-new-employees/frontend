import { request } from '../../utils/api';
import { baseUrl } from '../../utils/constants';

const pathPosition = `${baseUrl}/admin/courses`;

export const fetchLessons = (id) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${id}/lessons`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const setLesson = (data) => {
  const token = localStorage.getItem('token');
  return request( `${baseUrl}/admin/lessons`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

export const getLessonsById = (id) => {
  const token = localStorage.getItem('token');
  return request( `${baseUrl}/lessons/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
