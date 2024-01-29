import {Link} from "react-router-dom";
import registerScreenStyles from './RegisterScreen.module.scss';
import logo from '../../images/Landing/logo.svg';
import rocket from '../../images/ui/rocket.svg';


export default function RegisterScreen() {

  return (
    <section className={registerScreenStyles.container}>
      <div className={registerScreenStyles.containerText}>
          <Link to='/'><img className={registerScreenStyles.logo} src={logo} alt='QuickOn'/></Link>
        <p className={registerScreenStyles.text}>
          Платформа для обучения новых сотрудников
        </p>
        <p className={registerScreenStyles.text}>
          Создавайте индивидуальные курсы и должности для своей компании,
          комбинируйте их так, как нужно именно вам
        </p>
      </div>
      <img className={registerScreenStyles.image} src={rocket} alt="ракета" />
    </section>
  );
}
