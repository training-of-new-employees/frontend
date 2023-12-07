import emailConfirmationStyles from './EmailConfirmation.module.scss';
import registerFormStyles from '../Register/Register.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';
import EmailConfirmationForm from '../../components/EmailConfirmationFrom/EmailConfirmationFrom';

export default function Register() {
  return (
    <section className={registerFormStyles.container}>
      <RegisterScreen />
      <section className={registerFormStyles.form}>
        <EmailConfirmationForm />
        <footer className={registerFormStyles.footer}>&#169; 2023 QuickOn team</footer>
      </section>
    </section>
  );
}
