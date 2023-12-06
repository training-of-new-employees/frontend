import RegisterForm from "../../components/RegisterForm/RegisterForm";
import registerFormStyles from './Register.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';

export default function Register() {
  return (
    <section className={registerFormStyles.container}>
      <RegisterScreen />
      <section className={registerFormStyles.form}>
        <RegisterForm />
        <footer className={registerFormStyles.footer}>&#169; 2023 QuickOn team</footer>
      </section>
    </section>
  );
}
