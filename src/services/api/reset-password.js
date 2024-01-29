import { checkResponse } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
import { resetPasswordActions } from '../slices/reset-password';

const resetPassword = (email) => (dispatch) => {
  dispatch(resetPasswordActions.postResetPasswordLoading());

  return fetch(`${baseUrl}/password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  })
    .then((res) => checkResponse(res))
    .then((res) => {
      dispatch(resetPasswordActions.postResetPasswordError());
    })
    .catch((error) => {
      console.log(error);
      dispatch(
        resetPasswordActions.postResetPasswordSuccess({
          errorCode: error.statusCode,
          message: error.message,
        })
      );
    });
};
export default resetPassword;
