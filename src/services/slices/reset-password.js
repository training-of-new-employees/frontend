import { createSlice } from '@reduxjs/toolkit';

export const resetPasswordSlice = createSlice({
  name: 'userData',
  initialState: {
    isResetPasswordLoading: false,
    isResetPasswordError: false,
    resetPasswordError: {},
    user: {
      email: '',
    },
  },
  reducers: {
    postResetPasswordLoading: (state) => ({
      ...state,
      isResetPasswordLoading: true,
      isResetPasswordError: false,
    }),
    postResetPasswordError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isResetPasswordLoading: false,
        isResetPasswordError: true,
        resetPasswordError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postResetPasswordSuccess: (state) => ({
      ...state,
      isResetPasswordLoading: false,
      isResetPasswordError: false,
    }),
  },
});

export default resetPasswordSlice.reducer;

export const {
  postResetPasswordLoading,
  postResetPasswordError,
  postResetPasswordSuccess,
} = resetPasswordSlice.actions;

export const resetPasswordActions = {
  postResetPasswordLoading,
  postResetPasswordError,
  postResetPasswordSuccess,
};
