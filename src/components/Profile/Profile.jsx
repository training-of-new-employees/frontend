import { useState } from 'react';
import uploadPhoto from '../../images/ui/Photo.svg';
import profileInfoStyles from './ProfileInfo.module.scss';
import Input from '../ui-kit/Input/Input';
import useValidation from '../hooks/useValidation';
import PopupEditProfile from '../PopupEditProfile/PopupEditProfile';

const ProfileInfo = ({ onEditProfileClick }) => {
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
      <div className={profileInfoStyles.profileContant}>
        <div className={profileInfoStyles.headerContainer}>
          <h2 className={profileInfoStyles.header}>Профиль</h2>
          <div className={profileInfoStyles.userRoleContainer}>
            <p>Роль:</p>
            <div className={profileInfoStyles.roleContainer}>
              <div className={profileInfoStyles.imageHeader} />
              <p className={profileInfoStyles.positionProfile}>{values.position}</p>
            </div>
          </div>
        </div>
        <div className={profileInfoStyles.infoContainer}>
          <div className={profileInfoStyles.infoContant}>
            <div className={profileInfoStyles.mainInfoContainer}>
              <h3 className={profileInfoStyles.infoTitle}>Основная информация</h3>
              <button className={profileInfoStyles.infoEditButton} type='button' aria-label="Редактировать профиль" onClick={handleEditProfileClick} />
              <h3>ФИО:</h3>
              <p>{`${values.lastName} ${values.firstName} ${values.middleName}`}</p>
              <h3>E-mail:</h3>
              <p>{values.email}</p>
              <h3>Компания:</h3>
              <p>{values.company}</p>
            </div>
            <button type="button" className={profileInfoStyles.uploadPhoto}>
              <img alt="Загрузить фото" src={uploadPhoto} />
              Загрузить фото
            </button>
          </div>
          <form>
            <label className={profileInfoStyles.label} htmlFor="password">
              Пароль
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Введите пароль"
              value={values.password || ""}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </form>
        </div>
      </div>
      {isEditProfileOpen && (
        <PopupEditProfile onClose={handleCloseEditProfile} />
      )}
    </div>);
};

export default ProfileInfo;