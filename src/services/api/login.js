import { checkResponse, setCookie } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
import { loginActions } from '../slices/login';

export function login (email, password){
  // return function (dispatch) {
  //   dispatch(loginActions.postLoginLoading());

    return fetch(`${baseUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        // dispatch(
        //   loginActions.postLoginSuccess({
        //     token: res.token,
        //   })
        // );
        setCookie('accessToken', res.token);
      })
      // .catch((error) => {
      //   console.log(error);
      //   dispatch(
      //     loginActions.postLoginError({
      //       errorCode: error.statusCode,
      //       message: error.message,
      //     })
      //   );
      // });
      // }
  };
