import loginStyles from './Login.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <section className={loginStyles.container}>
      <RegisterScreen />
      <section className={loginStyles.form}>
        <LoginForm />
        <footer className={loginStyles.footer}>&#169; 2023 QuickOn team</footer>
      </section>
    </section>
  );
}
