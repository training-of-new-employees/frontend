import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '../../../components/ui-kit/Button/Button';
import Input from '../../../components/ui-kit/Input/Input';
import newUserStyle from '../../../components/NewUser/NewUser.module.scss';
import Navigation from '../../../components/Navigation/Navigation';
import useValidations from '../../../components/hooks/useValidation';
import {
  fetchUserById,
  fetchLinkEmail,
  patchUserAction,
} from '../../../services/users/usersSlice';

export default function UserEdit() {
  const { id } = useParams();
  const { handleChange } = useValidations();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);
  const { user, linkInvite } = useSelector((state) => state.usersState);

  React.useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch]);

  const [editUser, setEditUser] = React.useState({
    id: user.id,
    company_id: user.company_id,
    name: user.name,
    surname: user.surname,
    patronymic: user.patronymic,
    email: user.email,
    position_name: user.position_name,
    position_id: user.position_id,
  });

  React.useEffect(() => {
    dispatch(fetchLinkEmail(user.email));
  }, [dispatch, user]);

  React.useEffect(() => {
    setEditUser({
      ...editUser,
      link_invite: linkInvite.link,
      company_id: profile.company_id,
      position_id: profile.position_id,
    });
  }, [linkInvite, profile]);

  function handleName(event) {
    setEditUser({ ...editUser, name: event.currentTarget.value });
  }
  function handleSurname(event) {
    setEditUser({ ...editUser, surname: event.currentTarget.value });
  }
  function handleEmail(event) {
    setEditUser({ ...editUser, email: event.currentTarget.value });
  }
  function handlePositionName(event) {
    setEditUser({ ...editUser, position_name: event.currentTarget.value });
  }
  function handlePatronymic(event) {
    setEditUser({ ...editUser, patronymic: event.currentTarget.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(patchUserAction(editUser));
  };

  return (
    <section className={newUserStyle.newUser}>
      <Navigation />
      <form
        onSubmit={(evt) => handleSubmit(evt)}
        className={newUserStyle.newUserContant}
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
              value={editUser.name || ''}
              minLength={2}
              maxLength={15}
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
              value={editUser.surname || ''}
              minLength={2}
              maxLength={15}
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
              value={editUser.patronymic || ''}
              minLength={2}
              maxLength={15}
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
              value={editUser.position_name || ''}
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
              value={editUser.email || ''}
              minLength={5}
              maxLength={30}
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
              value={editUser.link_invite || ''}
              minLength={1}
              maxLength={30}
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
