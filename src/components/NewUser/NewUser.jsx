import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../ui-kit/Button/Button';
import Input from '../ui-kit/Input/Input';
import newUserStyle from './NewUser.module.scss';
import Navigation from '../Navigation/Navigation';
import styles from '../../pages/Lessons/Lessons.module.scss'
import useValidations from '../hooks/useValidation';
import {
  fetchProfile,
  createUserAction,
} from '../../services/profile/profileSlice';

export default function NewUser() {
  const navigate = useNavigate();
  const { handleChange } = useValidations();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);
  const [newUser, setNewUser] = React.useState({
    company_id: '',
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    position_name: '',
    position_id: '',
  });

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  React.useEffect(() => {
    setNewUser({
      ...newUser,
      company_id: profile.company_id,
      position_id: profile.position_id,
    });
  }, [profile]);

  function handleName(event) {
    setNewUser({ ...newUser, name: event.currentTarget.value });
  }
  function handleSurname(event) {
    setNewUser({ ...newUser, surname: event.currentTarget.value });
  }
  function handleEmail(event) {
    setNewUser({ ...newUser, email: event.currentTarget.value });
  }
  function handlePositionName(event) {
    setNewUser({ ...newUser, position_name: event.currentTarget.value });
  }
  function handlePatronymic(event) {
    setNewUser({ ...newUser, patronymic: event.currentTarget.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createUserAction(newUser));
    navigate(-1)
  };

  return (
    <section className={newUserStyle.newUser}>
      {/* <Navigation /> */}
      <nav className={newUserStyle.navigation}>
      <Button
          HTMLType="button"
          type="emptyBorder"
          buttonText="Назад"
          icon="back"
          onClick={() => navigate(-1)}
        />
      </nav>

      <form
        onSubmit={(evt) => handleSubmit(evt)}
        className={newUserStyle.newUserContant}
        noValidate
      >
        <h1 className={newUserStyle.newUserTitle}>Новый пользователь</h1>
        <ul className={newUserStyle.newUserContainer}>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="lastName">
              Фамилия
            </label>
            <Input
              id="lastName"
              name="lastname"
              type="text"
              placeholder="Введите Фамилию"
              onChange={(evt) => handleName(evt)}
              value={newUser.name || ''}
              minLength={2}
              maxLength={128}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="firstName">
              Имя
            </label>
            <Input
              id="firstName"
              name="firstname"
              type="text"
              placeholder="Введите Имя"
              onChange={(evt) => handleSurname(evt)}
              value={newUser.surname || ''}
              minLength={2}
              maxLength={128}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="middleName">
              Отчество
            </label>
            <Input
              id="middleName"
              name="middlename"
              type="text"
              placeholder="Введите Отчество"
              onChange={(evt) => handlePatronymic(evt)}
              value={newUser.patronymic || ''}
              minLength={2}
              maxLength={128}
            />
          </li>
        </ul>
        <ul className={newUserStyle.newUserText}>
          <li className={newUserStyle.newUserInput}>
            <label
              className={newUserStyle.newUserLabel}
              htmlFor="companyprofile"
            >
              Должность
            </label>
            <Input
              id="companyprofile"
              type="text"
              name="companyprofile"
              placeholder="Выберите подходящую должность"
              onChange={(evt) => handlePositionName(evt)}
              value={newUser.position_name || ''}
              minLength={2}
              maxLength={15}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="email">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="emailprofile"
              placeholder="Введите E-mail"
              onChange={(evt) => handleEmail(evt)}
              value={newUser.email || ''}
              minLength={7}
              maxLength={50}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label
              className={newUserStyle.newUserLabel}
              htmlFor="companyprofile"
            >
              Пригласительная ссылка
            </label>
            <Input
              id="linkInvite"
              type="text"
              name="linkInvite"
              placeholder=""
              onChange={handleChange}
              value=""
              disabled
            />
          </li>
        </ul>
        <div className={newUserStyle.newUserButton}>
          <p className={newUserStyle.newUserButtonTitle}>
            При создании пользователя на указанный e-mail придет пригласительная
            ссылка на платформу
          </p>
          <Button
            buttonText="Добавить пользователя"
            type="primary"
            HTMLType="submit"
          />
        </div>
      </form>
    </section>
  );
}
