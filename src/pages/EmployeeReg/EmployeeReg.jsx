import RegisterForm from '../../components/RegisterForm/RegisterForm';
import registerFormStyles from './Register.module.scss';
import RegisterScreen from '../../components/RegisterScreen/RegisterScreen';
import year from '../../components/Footer/logicDate';
import RegisterEmployeeForm from "../../components/RegisterEmployeeForm/RegisterEmployeeForm";

export default function EmployeeReg() {
  return (
    <section className={registerFormStyles.container}>
      <RegisterScreen />
      <section className={registerFormStyles.form}>
        <RegisterEmployeeForm />
        <footer className={registerFormStyles.footer}>
          &#169;{` ${year} QuickOn team`}
        </footer>
      </section>
    </section>
  );
}
