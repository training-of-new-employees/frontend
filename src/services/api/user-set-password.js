import { checkResponse } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
import { userActions } from '../slices/user-set-password';

const setPassword = (email, password) => (dispatch) => {
  dispatch(userActions.postSetPasswordLoading());

  return fetch(`${baseUrl}/user/set-password`, {
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
      dispatch(userActions.postSetPasswordSuccess());
    })
    .catch((error) => {
      console.log(error);
      dispatch(
        userActions.postSetPasswordError({
          errorCode: error.statusCode,
          message: error.message,
        })
      );
    });
};
export default setPassword;
