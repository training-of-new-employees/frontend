import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import navigationStyles from '../Navigation/Navigation.module.scss';
import CoursesIcon from '../../images/ui/NavigationCourses.svg';
import UsersIcon from '../../images/ui/NavigationUsers.svg';
import ProfessionsIcon from '../../images/ui/NavigationProfessions.svg';
import { paths } from '../../utils/constants';
import useValidation from '../hooks/useValidation';
import imgAdmin from '../../images/ui/ImageAdmin.svg';


export default function ProfileSidebar({ isAdmin }) {
  const {values} = useValidation()
  return (
    <nav className={navigationStyles.navigation}>
      <NavLink
        to={paths.profile}
        className={({ isActive }) =>
          `${navigationStyles.profileItem} ${
            isActive ? navigationStyles.profileItem_active : ''
          }`
        }
      >
        <div className={navigationStyles.profileContainer}>
          <img
            className={navigationStyles.profileImage}
            alt="Аватар пользователя"
            src={imgAdmin}
          />
          <div className={navigationStyles.profileNameContainer}>
            <p className={navigationStyles.profileName}>{values.firstName} {values.lastName}</p>
            <p className={navigationStyles.profilePosition}>{values.position_name}</p>
          </div>
        </div>
      </NavLink>
      <NavLink
        to={paths.courses}
        className={({ isActive }) =>
          `${navigationStyles.item} ${
            isActive ? navigationStyles.item_active : ''
          }`
        }
      >
        <div className={navigationStyles.itemContainer}>
          <img
            className={navigationStyles.itemImage}
            alt="иконка"
            src={CoursesIcon}
          />
          <p>Курсы</p>
        </div>
      </NavLink>
      {isAdmin && (
        <>
          <NavLink
            to={paths.users}
            className={({ isActive }) =>
              `${navigationStyles.item} ${
                isActive ? navigationStyles.item_active : ''
              }`
            }
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
            to={paths.positions}
            className={({ isActive }) =>
              `${navigationStyles.item} ${
                isActive ? navigationStyles.item_active : ''
              }`
            }
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
      )}
    </nav>
  );
}

ProfileSidebar.propTypes = {
  isAdmin: PropTypes.bool,
};

ProfileSidebar.defaultProps = {
  isAdmin: false,
};
