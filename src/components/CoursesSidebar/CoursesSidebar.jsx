import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import navigationStyles from '../Navigation/Navigation.module.scss';
import UsersIcon from '../../images/ui/NavigationUsers.svg';
import ProfessionsIcon from '../../images/ui/NavigationProfessions.svg';

export default function CoursesSidebar({ isAdmin }) {
  return (
    <nav className={navigationStyles.navigation}>
      <NavLink
        to="/profile"
        className={({ isActive }) => {
          const linkClasses = [navigationStyles.profileItem];
          if (isActive) linkClasses.push(navigationStyles.profileItem_active);
          return linkClasses.join(' ');
        }}
      >
        <button type="button">К курсам</button>
      </NavLink>
      {isAdmin ? (
        <>
          <NavLink
            to="/courses"
            className={({ isActive }) => {
              const linkClasses = [navigationStyles.item];
              if (isActive) linkClasses.push(navigationStyles.item_active);
              return linkClasses.join(' ');
            }}
          >
            <div className={navigationStyles.itemContainer}>
              <img
                className={navigationStyles.itemImage}
                alt="иконка"
                src={UsersIcon}
              />
              <p>Пользователи</p>
            </div>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => {
              const linkClasses = [navigationStyles.item];
              if (isActive) linkClasses.push(navigationStyles.item_active);
              return linkClasses.join(' ');
            }}
          >
            <div className={navigationStyles.itemContainer}>
              <img
                className={navigationStyles.itemImage}
                alt="иконка"
                src={ProfessionsIcon}
              />
              <p>Должности</p>
            </div>
          </NavLink>
        </>
      ) : (
        <div>Сайдбар</div>
      )}
    </nav>
  );
}

CoursesSidebar.propTypes = {
  isAdmin: PropTypes.bool,
};

CoursesSidebar.defaultProps = {
  isAdmin: false,
};
