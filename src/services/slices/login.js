import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoginLoading: false,
    isLoginError: false,
    loginError: {},
    token: '',
  },
  reducers: {
    postLoginLoading: (state) => ({
      ...state,
      isLoginLoading: true,
      isLoginError: false,
    }),
    postLoginError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isLoginLoading: false,
        isLoginError: true,
        loginError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postLoginSuccess: (state, action) => ({
      ...state,
      isLoginLoading: false,
      isLoginError: false,
      loginError: action.payload,
    }),
  },
});

export default loginSlice.reducer;

export const { postLoginLoading, postLoginError, postLoginSuccess } =
  loginSlice.actions;

export const loginActions = {
  postLoginLoading,
  postLoginError,
  postLoginSuccess,
};
