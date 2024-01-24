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
import CoursesPage from '../../pages/Courses/Courses';
import NewPosition from '../../pages/PositionsPage/NewPosition/NewPosition';
import EditPosition from '../../pages/PositionsPage/EditPosition/EditPosition';
import UserEdit from '../../pages/User/UserEdit/UserEdit';
import NewCours from '../../pages/Courses/NewCourses/NewCours';
import EditCours from '../../pages/Courses/EditCours/EditCours';
import Lessons from '../../pages/Lessons/Lessons';
import CreateLesson from '../../pages/Lessons/NewLessons/CreateLesson';

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
        <Route path={paths.positions} element={<PositionPage />}  />
        <Route path={paths.users} element={<User />} />
        <Route path={paths.newuser} element={<NewUser />} />
        <Route element={<UserEdit />} path={`${paths.users}/:id`} />
        <Route path={paths.courses} element={<CoursesPage />} />
        <Route path={`${paths.courses}/new-courses`} element={<NewCours />} />
        <Route path={`${paths.courses}/:id`} element={<EditCours />} />
        <Route path={`${paths.courses}/:id/lessons`} element={<Lessons />} />
        <Route path={`${paths.courses}/:id/new-lesson`} element={<CreateLesson />} />
        

        <Route
          path={`${paths.positions}/setting-access/:id`}
          element={<SettingAccess />}
        />
        <Route element={<NewPosition />}   path={`${paths.positions}/new-positions`} />
        <Route element={<EditPosition />} path={`${paths.positions}/:id`} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
    </ToastProvider>
  );
}
