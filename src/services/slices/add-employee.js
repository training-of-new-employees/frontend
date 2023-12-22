import { createSlice } from '@reduxjs/toolkit';

export const addEmployeeSlice = createSlice({
  name: 'addEmployee',
  initialState: {
    isAddEmployeeLoading: false,
    isAddEmployeeError: false,
    addEmployeeError: {},
    user: {},
  },
  reducers: {
    postAddEmployeeLoading: (state) => ({
      ...state,
      isAddEmployeeLoading: true,
      isAddEmployeeError: false,
    }),
    postAddEmployeeError: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        isAddEmployeeLoading: false,
        isAddEmployeeError: true,
        addEmployeeError: {
          errorCode: action.payload.errorCode,
          message: action.payload.message,
        },
      };
    },
    postAddEmployeeSuccess: (state, action) => ({
      ...state,
      isAddEmployeeLoading: false,
      isAddEmployeeError: false,
      user: action.payload,
    }),
  },
});

export default addEmployeeSlice.reducer;

export const {
  postAddEmployeeLoading,
  postAddEmployeeError,
  postAddEmployeeSuccess,
} = addEmployeeSlice.actions;

export const addEmployeeActions = {
  postAddEmployeeLoading,
  postAddEmployeeError,
  postAddEmployeeSuccess,
};
