import navigationStyles from './Navigation.module.scss';
import profileStyles from './Profile.module.scss';
import Triangle from '../../images/ui/Triangle.svg';
import Team from '../../images/ui/Team.svg';
import Bag from '../../images/ui/Bag.svg';
import Stats from '../../images/ui/Stats.svg';
import Settings from '../../images/ui/Settings.svg';
import Avatar from '../../images/stubs/Avatar.png';

// @TODO добавить логику отображения имени пользователя и его должности
// @TODO заменить теги <a> на <Link>

export default function Navigation() {
  return (
    <nav className={navigationStyles.navigation}>
      <a
        className={navigationStyles.item && navigationStyles.item_active}
        to="/Profile"
      >
        <div className={profileStyles.block}>
          <img
            className={profileStyles.image}
            alt="Аватар пользователя"
            src={Avatar}
          />
          <div className={profileStyles.textContainer}>
            <p className={profileStyles.name}>Алла Андреева</p>
            <p className={profileStyles.job}>Администратор</p>
          </div>
        </div>
      </a>
      <a className={navigationStyles.item} to="/Courses">
        <span className={navigationStyles.span}>
          <img
            className={navigationStyles.spanImage}
            alt="иконка"
            src={Triangle}
          />
        </span>
        Курсы
      </a>
      <a className={navigationStyles.item} to="/Courses">
        <span className={navigationStyles.span}>
          <img className={navigationStyles.spanImage} alt="иконка" src={Team} />
        </span>
        Сотрудники
      </a>
      <a className={navigationStyles.item} to="/Courses">
        <span className={navigationStyles.span}>
          <img className={navigationStyles.spanImage} alt="иконка" src={Bag} />
        </span>
        Должности
      </a>
      <a className={navigationStyles.item} to="/Courses">
        <span className={navigationStyles.span}>
          <img
            className={navigationStyles.spanImage}
            alt="иконка"
            src={Stats}
          />
        </span>
        Статистика
      </a>
      <a className={navigationStyles.item} to="/Courses">
        <span className={navigationStyles.span}>
          <img
            className={navigationStyles.spanImage}
            alt="иконка"
            src={Settings}
          />
        </span>
        Настройки
      </a>
    </nav>
  );
}
