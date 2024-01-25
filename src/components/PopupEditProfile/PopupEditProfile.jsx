import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../ui-kit/Input/Input';
import Popup from '../ui-kit/Popup/Popup';
import popupEditstyle from './PopupEditProfile.module.scss';
import useValidation from '../hooks/useValidation';
// import ButtonFilled from '../ui-kit/Buttons/ButtonFilled/ButtonFilled';
import Button from '../ui-kit/Button/Button';
import { editProfile, fetchProfile } from '../../services/profile/profileSlice';
import { renameProfile } from '../../services/profile/ProfileApi';

export default function PopupEditProfile({ isOpen, onClose }) {
  const { profile, status, isLoading } = useSelector(
    (state) => state.profileState
  );
  const { values, handleChange } = useValidation();
  const [editUser, setEditUser] = React.useState({});
  const dispatch = useDispatch();

  React.useEffect(() => {
    setEditUser({
      id: profile.id,
      name: profile.name,
      surname: profile.surname,
      patronymic: profile.patronymic,
      email: profile.email,
      position_name: profile.position_name,
      company_name: profile.company_name,
    });
  }, [isLoading, profile]);

  function handleName(event) {
    setEditUser({ ...editUser, name: event.currentTarget.value });
  }
  function handleSurname(event) {
    setEditUser({ ...editUser, surname: event.currentTarget.value });
  }
  function handleEmail(event) {
    setEditUser({ ...editUser, email: event.currentTarget.value });
  }
  function handleCompanyName(event) {
    setEditUser({ ...editUser, company_name: event.currentTarget.value });
  }
  function handlePatronymic(event) {
    setEditUser({ ...editUser, patronymic: event.currentTarget.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editProfile(editUser));
    onClose();
    console.log(editUser);
  };

  return (
    <Popup
      name="editProfile"
      title="Редактирование основной информации"
      onSubmit={(evt) => handleSubmit(evt)}
      isOpen={isOpen}
      onClose={onClose}
    >
      {status === 'loading' && <p>Загрузка</p>}
      {status === 'resolved' && (
        <>
          <ul className={popupEditstyle.popupEditContainer}>
            <li className={popupEditstyle.popupEditInput}>
              <label
                className={popupEditstyle.popupEditLabel}
                htmlFor="lastName"
              >
                Фамилия
              </label>
              <Input
                id="lastName"
                name="lastname"
                type="text"
                placeholder="Введите Фамилию"
                onChange={(event) => handleName(event)}
                value={editUser.name}
                minLength={2}
                maxLength={15}
              />
            </li>
            <li className={popupEditstyle.popupEditInput}>
              <label
                className={popupEditstyle.popupEditLabel}
                htmlFor="firstName"
              >
                Имя
              </label>
              <Input
                id="firstName"
                name="firstname"
                type="text"
                placeholder="Введите Имя"
                onChange={(event) => handleSurname(event)}
                value={editUser.surname || ''}
                minLength={1}
                maxLength={15}
              />
            </li>
            <li className={popupEditstyle.popupEditInput}>
              <label
                className={popupEditstyle.popupEditLabel}
                htmlFor="middleName"
              >
                Отчество
              </label>
              <Input
                id="middleName"
                name="middlename"
                type="text"
                placeholder="Введите Отчество"
                onChange={(event) => handlePatronymic(event)}
                value={editUser.patronymic || ''}
                minLength={1}
                maxLength={15}
              />
            </li>
          </ul>
          <ul className={popupEditstyle.popupEditText}>
            <li className={popupEditstyle.popupEditInput}>
              <label
                className={popupEditstyle.popupEditLabel}
                htmlFor="companyprofile"
              >
                Компания
              </label>
              <Input
                id="companyprofile"
                type="text"
                name="companyprofile"
                placeholder="Введите название компании"
                onChange={(event) => handleCompanyName(event)}
                value={editUser.company_name || ''}
                minLength={1}
                maxLength={15}
              />
            </li>
            <li className={popupEditstyle.popupEditInput}>
              <label className={popupEditstyle.popupEditLabel} htmlFor="email">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                name="emailprofile"
                placeholder="Введите E-mail"
                onChange={(event) => handleEmail(event)}
                value={editUser.email || ''}
                minLength={5}
                maxLength={30}
              />
            </li>
          </ul>
        </>
      )}

      <div className={popupEditstyle.popupEditButton}>
        <div role="none" onClick={onClose}>
          <Button
            buttonText="Отменить"
            type="primary"
            // icon='white'
          />
        </div>

        <Button
          buttonText="Сохранить&nbsp;изменения"
          type="primary"
          HTMLType="submit"
          // icon='white'
        />
      </div>
    </Popup>
  );
}

PopupEditProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
