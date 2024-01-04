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
import ToastProvider from '../ui-kit/Snackbar/ToastProvider/ToastProvider';
import PositionPage from '../../pages/PositionsPage/PositionsPage';
import SettingAccess from '../../pages/PositionsPage/SettingAccess/SettingAccess';
import User from '../../pages/User/User';
import NewUser from '../NewUser/NewUser';

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
        <Route path={paths.users} element={<User />} />
        <Route path={paths.newuser} element={<NewUser />} />
        <Route
          path={`${paths.positions}/setting-access`}
          element={<SettingAccess />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </ToastProvider>
  );
}
