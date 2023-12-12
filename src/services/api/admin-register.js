import { checkResponse } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
import { adminAuthActions } from '../slices/admin-register';

export const adminRegister = (email, password, company) =>
  function (dispatch) {
    dispatch(adminAuthActions.postRegisterLoading());

    return fetch(`${baseUrl}/admin/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        company_name: company,
      }),
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        dispatch(adminAuthActions.postRegisterSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          adminAuthActions.postRegisterError({
            errorCode: error.statusCode,
            message: error.message,
          })
        );
      });
  };

export const adminVerifyEmail = (code) =>
  function (dispatch) {
    dispatch(adminAuthActions.postVerifyLoading());

    return fetch(`${baseUrl}/admin/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code,
      }),
    })
      .then((res) => checkResponse(res))
      .then((res) => {
        dispatch(
          adminAuthActions.postVerifySuccess({
            admin: {
              email: res['email created'],
            },
          })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          adminAuthActions.postVerifyError({
            errorCode: error.statusCode,
            message: error.message,
          })
        );
      });
  };
