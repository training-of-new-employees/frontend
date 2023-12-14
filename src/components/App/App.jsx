import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { paths } from '../../utils/constants';

import appStyles from './App.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import NotFound from '../../pages/NotFound/NotFound';

export default function App() {
  return (
    <div className={appStyles.app}>
      {/* <Header /> */}
      <Routes>
        <Route path={paths.main} element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="*" element={<ForgotPassword />} />
        <Route path="*" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
