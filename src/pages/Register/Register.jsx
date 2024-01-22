import RegisterForm from '../../components/RegisterForm/RegisterForm';
import registerFormStyles from './Register.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';
import year from '../../components/Footer/logicDate';

export default function Register() {
  return (
    <section className={registerFormStyles.container}>
      <RegisterScreen />
      <section className={registerFormStyles.form}>
        <RegisterForm />
        <footer className={registerFormStyles.footer}>
          &#169;{` ${year} QuickOn team`}
        </footer>
      </section>
    </section>
  );
}
