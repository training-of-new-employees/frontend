import { request } from "../../utils/api";

 function getToken (email, password)  {
  return request('http://localhost:8080/api/v1/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export default getToken;
