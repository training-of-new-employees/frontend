import {useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import logo from '../../images/Landing/logo.svg';
import headerStyles from './Header.module.scss';
import imageAdmin from '../../images/ui/ImageAdmin.svg'
import ExitPopup from "../ExitPopup/ExitPopup";


export default function Header() {
    const { pathname } = useLocation();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    // const isAdmin = localStorage.getItem('role') === 'ADMIN'
    const isAdmin = true
    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {pathname !== '/login' && pathname !== '/registration' && pathname !== '/' && !pathname.includes('first-login') ? (
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
                  aria-label="Выйти из профиля"
                  type='button'
                  onClick={handleOpenPopup}
              ><img className={headerStyles.imageAdmin} src={imageAdmin} alt='Выйти'/>
              </button>
          ) : (
              <button
              type="button"
              aria-label="Выйти из профиля"
              className={headerStyles.button_fioUser}
              onClick={handleOpenPopup}
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
        <ExitPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}

