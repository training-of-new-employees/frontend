import React, { useState } from 'react';

import adminIcon from '../../images/ui/Admin.svg';
import uploadPhoto from '../../images/ui/Photo.svg';
import examplePhoto from '../../images/stubs/Avatar.png';

import profileInfoStyles from './ProfileInfo.module.scss';
import Input from '../ui-kit/Input/Input';
import useValidation from '../hooks/useValidation';

const ProfileInfo = () => {
  const { values, handleChange } = useValidation();

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
              <button className={profileInfoStyles.infoEdit} type='button' aria-label="Редактировать профиль" />
              <h3>ФИО:</h3>
              <p>{values.name}</p>
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

          {/* <div className={profileInfoStyles.pictureContainer}>
            
          </div> */}
          <form >
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
    </div>);
};

export default ProfileInfo;