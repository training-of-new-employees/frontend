import loginStyles from './Login.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';
import LoginForm from '../../components/LoginForm/LoginForm';
import year from '../../components/Footer/logicDate';

export default function Login() {
  return (
    <section className={loginStyles.container}>
      <RegisterScreen />
      <section className={loginStyles.form}>
        <LoginForm type="not user" />
        <footer className={loginStyles.footer}>
          &#169;{` ${year} QuickOn team`}
        </footer>
      </section>
    </section>
  );
}
