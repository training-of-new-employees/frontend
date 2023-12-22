import { checkResponse } from '../../utils/helpers';
import { baseUrl } from '../../utils/constants';
import { addEmployeeActions } from '../slices/add-employee';

export const addEmployee = (email, password) =>
  function (dispatch) {
    dispatch(addEmployeeActions.postAddEmployeeLoading());

    return fetch(`${baseUrl}/admin/employee`, {
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
        dispatch(addEmployeeActions.postAddEmployeeSuccess(res));
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          addEmployeeActions.postAddEmployeeError({
            errorCode: error.statusCode,
            message: error.message,
          })
        );
      });
  };
