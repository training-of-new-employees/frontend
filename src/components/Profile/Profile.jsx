import PropTypes from 'prop-types';
import { useState } from 'react';
import uploadPhoto from '../../images/ui/Photo.svg';
import profileInfoStyles from './ProfileInfo.module.scss';
// import Input from '../ui-kit/Input/Input';
import useValidation from '../hooks/useValidation';
import PopupEditProfile from '../PopupEditProfile/PopupEditProfile';
// import ButtonFilled from '../ui-kit/Buttons/ButtonFilled/ButtonFilled';

const ProfileInfo = ({ onEditProfileClick, isUser }) => {
  const { values, handleChange } = useValidation();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfileOpen(true);
    if (onEditProfileClick) {
      onEditProfileClick();
    }
  };

  const handleCloseEditProfile = () => {
    setIsEditProfileOpen(false);
  };

  return (
    <div className={profileInfoStyles.profileContainer}>
      <div className={profileInfoStyles.profileContent}>
        <div className={profileInfoStyles.headerContainer}>
          <h2 className={profileInfoStyles.header}>Профиль</h2>
          <div className={profileInfoStyles.userRoleContainer}>
            <p>Роль:</p>
            <div className={profileInfoStyles.roleContainer}>
              <div className={profileInfoStyles.imageHeader} />
              <p className={profileInfoStyles.positionProfile}>
                {values.position}
              </p>
            </div>
          </div>
        </div>
        <div className={profileInfoStyles.infoContainer}>
          <div className={profileInfoStyles.infoContant}>
            <article className={profileInfoStyles.mainInfoContainer}>
              <div className={profileInfoStyles.mainInfoTitle}>
                <h3 className={profileInfoStyles.infoTitle}>
                  Основная информация
                </h3>
                {!isUser ? (
                  <button
                    className={profileInfoStyles.infoEditButton}
                    type="button"
                    aria-label="Редактировать профиль"
                    onClick={handleEditProfileClick}
                  />
                ) : (
                  ''
                )}
              </div>
              <ul className={profileInfoStyles.infoLists}>
                <li className={profileInfoStyles.infoList}>
                  <h3 className={profileInfoStyles.infoSubtitle}>ФИО:</h3>
                  <p
                    className={profileInfoStyles.infoText}
                  >{`${values.lastName} ${values.firstName} ${values.middleName}`}</p>
                </li>
                <li className={profileInfoStyles.infoList}>
                  <h3 className={profileInfoStyles.infoSubtitle}>Компания:</h3>
                  <p className={profileInfoStyles.infoText}>{values.company}</p>
                </li>
                <li className={profileInfoStyles.infoList}>
                  <h3 className={profileInfoStyles.infoSubtitle}>E-mail:</h3>
                  <p className={profileInfoStyles.infoText}>{values.email}</p>
                </li>
                {isUser ? (
                  <li className={profileInfoStyles.infoList}>
                    <h3 className={profileInfoStyles.infoSubtitle}>
                      Должность:
                    </h3>
                    <p className={profileInfoStyles.infoText}>
                      {values.position}
                    </p>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </article>
            {!isUser ? (
              <button type="button" className={profileInfoStyles.uploadPhoto}>
                <img
                  className={profileInfoStyles.profilePicture}
                  alt="Загрузить фото"
                  src={uploadPhoto}
                />
              </button>
            ) : (
              ''
            )}
          </div>
          {/* <form className={profileInfoStyles.form}>
            <h2 className={profileInfoStyles.formHeader}>Изменить пароль</h2>
            <div className={profileInfoStyles.inputContainer}>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Старый пароль"
                value={values.password || ''}
                onChange={handleChange}
                disabled={!isEditProfileOpen}
                // autoComplete="current-password"
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Новый пароль"
                value={values.password || ''}
                onChange={handleChange}
                disabled={!isEditProfileOpen}
                // autoComplete="current-password"
              />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Повторите новый пароль"
                value={values.password || ''}
                onChange={handleChange}
                disabled={!isEditProfileOpen}
                // autoComplete="current-password"
              />
            </div>
            <ButtonFilled type="button" disabled={!isEditProfileOpen}>
              Изменить пароль
            </ButtonFilled>
          </form> */}
        </div>
      </div>
      {isEditProfileOpen && (
        <PopupEditProfile onClose={handleCloseEditProfile} />
      )}
    </div>
  );
};

export default ProfileInfo;

ProfileInfo.propTypes = {
  onEditProfileClick: PropTypes.func.isRequired,
  isUser: PropTypes.bool,
};

ProfileInfo.defaultProps = {
  isUser: false,
};
