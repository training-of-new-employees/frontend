import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './slices/login';
import { adminAuthSlice } from './slices/admin-register';
import { addEmployeeSlice } from './slices/add-employee';
import { resetPasswordSlice } from './slices/reset-password';
import { userSetPasswordSlice } from './slices/user-set-password';

export const rootReducer = combineReducers({
  loginState: loginSlice.reducer,
  adminAuthState: adminAuthSlice.reducer,
  addEmployeeState: addEmployeeSlice.reducer,
  resetPasswordState: resetPasswordSlice.reducer,
  userSetPasswordState: userSetPasswordSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
