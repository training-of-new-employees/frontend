import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from '../../images/ui/Logo.svg';

import headerStyles from './Header.module.scss';

/**
 *компонент шапки, отображение зависит от роли пользователя
 *@param {boolean} isAdmin - хранит всебе ответ админ это или нет
 */
export default function Header({ isAdmin }) {
  // @TODO ко всем картинкам подключить общий стиль чтобы они были блочными

  return (
    <header className={headerStyles.header}>
      <Link to="/">
        <img className={headerStyles.headerImage} src={logo} alt="Логотип" />
      </Link>
      {isAdmin ? (
        <button
          className={headerStyles.button}
          type="button"
          aria-label="выйти из профиля"
        />
      ) : (
        <button
          type="button"
          aria-label="выйти из профиля"
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
  );
}

// описание пропсов
Header.propTypes = {
  /**
   *отвечает на вопрос админ это или нет boole
   */
  isAdmin: PropTypes.bool,
};

// пропсы по умолчанию
Header.defaultProps = {
  isAdmin: false,
};
