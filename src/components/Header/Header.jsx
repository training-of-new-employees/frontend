import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/ui/Logo.svg';
import headerStyles from './Header.module.scss';

/**
 * the header component, the display depends on the user's role
 *@param {boolean} isAdmin - хранит в себе ответ админ это или нет
 */
export default function Header({ isAdmin }) {
  const { pathname } = useLocation();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {pathname !== '/login' && pathname !== '/registration' ? (
        <header className={headerStyles.header}>
          <Link to="/">
            <img
              className={headerStyles.headerImage}
              src={logo}
              alt="Логотип"
            />
          </Link>
          {isAdmin ? (
            <button
              className={headerStyles.button}
              type="button"
              aria-label="Выйти из профиля"
            />
          ) : (
            <button
              type="button"
              aria-label="Выйти из профиля"
              className={headerStyles.button_fioUser}
            >
              <span>Фамилия Имя</span>
              <span>
                <svg
                  width="24"
                  height="24"
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 15.354 6.346 9.7 7.4 8.646l4.6 4.6 4.6-4.6L17.654 9.7 12 15.354Z" />
                </svg>
              </span>
            </button>
          )}
        </header>
      ) : (
        ''
      )}
    </>
  );
}

// props description
Header.propTypes = {
  /**
   * the prop stores the answer whether it is an admin or not
   */
  isAdmin: PropTypes.bool,
};

// default props
Header.defaultProps = {
  isAdmin: true,
};
