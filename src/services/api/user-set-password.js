/* eslint-disable arrow-body-style */
import { checkResponse } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
// import { userActions } from '../slices/user-set-password';

export const setPassword = (email, invite, password) => {
  // function (dispatch) {
  //   dispatch(userActions.postSetPasswordLoading());
  return fetch(`${baseUrl}/users/set-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      invite,
      password,
    }),
  })
    .then(res => checkResponse(res))
    // .then(() => {
    //   dispatch(userActions.postSetPasswordSuccess());
    // })
    .then((data) => {
      // if (data.token) {
        localStorage.setItem('token', data.token);
        // return data;
      // }
    })}
  // .catch((error) => {
  //   console.log(error);
  //   // dispatch(
  //   //   userActions.postSetPasswordError({
  //   //     errorCode: error.statusCode,
  //   //     message: error.message,
  //   //   })
  //   // );
  // });
  // }
