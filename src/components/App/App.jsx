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
import EmployeeReg from "../../pages/EmployeeReg/EmployeeReg";
import {ProtectedRouteForAdmin} from "../../services/protectedRoutes/ProtectedRoutes";
import CurrentLesson from '../../pages/Lessons/CurrentLesson/CurrentLesson';
import ExitPopup from "../ExitPopup/ExitPopup";

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
          <Route
            path={paths.positions}
            element={
              <ProtectedRouteForAdmin>
                <PositionPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={paths.users}
            element={
              <ProtectedRouteForAdmin>
                <User />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={paths.newuser}
            element={
              <ProtectedRouteForAdmin>
                <NewUser />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.users}/:id`}
            element={
              <ProtectedRouteForAdmin>
                <UserEdit />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={paths.courses}
            element={
              <ProtectedRouteForAdmin>
                <CoursesPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.courses}/new-courses`}
            element={
              <ProtectedRouteForAdmin>
                <NewCours />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.courses}/:id`}
            element={
              <ProtectedRouteForAdmin>
                <EditCours />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.courses}/:id/lessons`}
            element={
              <ProtectedRouteForAdmin>
                <Lessons />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.courses}/:id/new-lesson`}
            element={
              <ProtectedRouteForAdmin>
                <CreateLesson />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.courses}/:id/lessons/:id`}
            element={
              <ProtectedRouteForAdmin>
                <CurrentLesson />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.positions}/setting-access/:id`}
            element={
              <ProtectedRouteForAdmin>
                <SettingAccess />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.positions}/new-positions`}
            element={
              <ProtectedRouteForAdmin>
                <NewPosition />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path={`${paths.positions}/:id`}
            element={
              <ProtectedRouteForAdmin>
                <EditPosition />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path={paths.employeeReg} element={<EmployeeReg />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </ToastProvider>
  );
}
