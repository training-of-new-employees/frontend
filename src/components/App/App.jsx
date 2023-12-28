import { Routes, Route } from 'react-router-dom';
import { paths } from '../../utils/constants';
import appStyles from './App.module.scss';
import Main from '../Main/Main';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';
import Header from '../Header/Header';
import CoursesPage from '../../pages/Courses/Courses';
import PositionPage from '../../pages/PositionsPage/PositionsPage';
import SettingAccess from '../../pages/PositionsPage/SettingAccess/SettingAccess';
import ToastProvider from "../ui-kit/Snackbar/ToastProvider/ToastProvider";

export default function App() {
  return (
    <ToastProvider>
    <div className={appStyles.app}>
      <Header />
      <Routes>
        <Route path={paths.main} element={<Main />} />
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.registration} element={<Register />} />
        <Route path="*" element={<ForgotPassword />} />
        <Route path="*" element={<ResetPassword />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.positions} element={<PositionPage />} />
        <Route
          path={`${paths.positions}/setting-access`}
          element={<SettingAccess />}
        />
        <Route path="*" element={<NotFound />} />
        <Route path={paths.courses} element={<CoursesPage />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </ToastProvider>
  );
}
