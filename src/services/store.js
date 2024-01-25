import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loginSlice } from './slices/login';
import { adminAuthSlice } from './slices/admin-register';
import { addEmployeeSlice } from './slices/add-employee';
import { resetPasswordSlice } from './slices/reset-password';
import { userSetPasswordSlice } from './slices/user-set-password';
import profileSlice from './profile/profileSlice';
import positionSlice from './positions/positionsSlice';
import usersSlice from './users/usersSlice';
import coursesSlice from './courses/coursesSlice';
import lessonsSlice from './lessons/lessonsSlice';

export const rootReducer = combineReducers({
  loginState: loginSlice.reducer,
  adminAuthState: adminAuthSlice.reducer,
  addEmployeeState: addEmployeeSlice.reducer,
  resetPasswordState: resetPasswordSlice.reducer,
  userSetPasswordState: userSetPasswordSlice.reducer,
  profileState: profileSlice,
  positionState: positionSlice,
  usersState: usersSlice,
  coursesState: coursesSlice,
  lessonsState: lessonsSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
