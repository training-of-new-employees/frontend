import { createSlice } from '@reduxjs/toolkit';

export const userSetPasswordSlice = createSlice({
  name: 'userSetPassword',
  initialState: {
    isSetPasswordLoading: false,
    isSetPasswordError: false,
    setPasswordError: {},
    user: {
      email: '',
    },
  },
  reducers: {
    postSetPasswordLoading: (state) => ({
      ...state,
      isSetPasswordLoading: true,
      isSetPasswordError: false,
    }),
    postSetPasswordError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isSetPasswordLoading: false,
        isSetPasswordError: true,
        setPasswordError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postSetPasswordSuccess: (state) => ({
      ...state,
      isSetPasswordLoading: false,
      isSetPasswordError: false,
    }),
  },
});

export default userSetPasswordSlice.reducer;

export const {
  postSetPasswordLoading,
  postSetPasswordError,
  postSetPasswordSuccess,
} = userSetPasswordSlice.actions;

export const userActions = {
  postSetPasswordLoading,
  postSetPasswordError,
  postSetPasswordSuccess,
};
