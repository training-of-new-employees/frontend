import { Routes, Route } from 'react-router-dom';
import paths from '../../utils/constants';

import appStyles from './App.module.scss';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import ForgotPassword from '../../pages/forgotPassword/ForgotPassword';
import ResetPassword from '../../pages/resetPassword/ResetPassword';
import Profile from '../../pages/profile/Profile';
import NotFound from '../../pages/notFound/NotFound';

const App = () => (
	<div className={appStyles.app}>
		<Header />
		<Routes>
			<Route path={paths.main} element={Main} />
			<Route path="*" element={Login} />
			<Route path="*" element={Register} />
			<Route path="*" element={ForgotPassword} />
			<Route path="*" element={ResetPassword} />
			<Route path="*" element={Profile} />
			<Route path="*" element={NotFound} />
		</Routes>
		<Footer />
	</div>
);

export default App;
