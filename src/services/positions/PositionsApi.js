import { request } from "../../utils/api";
import { baseUrl } from "../../utils/constants";

const pathPosition = `${baseUrl}/positions`;



export const fetchPositions = () => {
  const token = localStorage.getItem('accessToken');
  return request(pathPosition, {
    headers: {
      Authorization: `Bearer ${  token}`,
    },
  });
};

export const setPosition = (data) => {
  const token = localStorage.getItem('accessToken');
  return request(pathPosition, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${  token}`,
    },
    body: {
        archived: true,
        company_id: data.company_id,
        name: data.name
      
    }
  });
};

export const archivedPosition = (data) => {
  const token = localStorage.getItem('accessToken');
  return request(pathPosition, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${  token}`,
    },
    body: {
        archived: false,
        company_id: data.company_id,
        name: data.name
      
    }
  });
};


