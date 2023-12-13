import { createSlice } from '@reduxjs/toolkit';

export const adminAuthSlice = createSlice({
  name: 'adminData',
  initialState: {
    isRegisterLoading: false,
    isRegisterError: false,
    registerError: {},
    isVerifyLoading: false,
    isVerifyError: false,
    verifyError: {},
    token: '',
    admin: {
      email: '',
    },
  },
  reducers: {
    postRegisterLoading: (state) => ({
      ...state,
      isRegisterLoading: true,
      isRegisterError: false,
    }),
    postRegisterError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isRegisterLoading: false,
        isRegisterError: true,
        registerError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postRegisterSuccess: (state) => ({
      ...state,
      isRegisterLoading: false,
      isRegisterError: false,
    }),
    postVerifyLoading: (state) => ({
      ...state,
      isVerifyLoading: true,
      isVerifyError: false,
    }),
    postVerifyError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isVerifyLoading: false,
        isVerifyError: true,
        verifyError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postVerifySuccess: (state, action) => ({
      ...state,
      isVerifyLoading: false,
      isVerifyError: false,
      admin: action.payload,
    }),
  },
});

export default adminAuthSlice.reducer;

export const {
  postRegisterLoading,
  postRegisterError,
  postRegisterSuccess,
  postVerifyLoading,
  postVerifyError,
  postVerifySuccess,
} = adminAuthSlice.actions;

export const adminAuthActions = {
  postRegisterLoading,
  postRegisterError,
  postRegisterSuccess,
  postVerifyLoading,
  postVerifyError,
  postVerifySuccess,
};
