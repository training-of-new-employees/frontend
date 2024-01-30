import { request } from '../../utils/api';
import { baseUrl } from '../../utils/constants';

const pathPosition = `${baseUrl}/users/courses`;

export const fetchUserCourses = () => {
  const token = localStorage.getItem('token');
  return request(pathPosition, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchUserLessons = (id) => {
  const token = localStorage.getItem('token');
  return request(`${pathPosition}/${id}/lessons`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};
