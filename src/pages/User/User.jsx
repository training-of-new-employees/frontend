import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import Table from '../../components/ui-kit/List/Table';
import userStyle from './User.module.scss';
import Button from '../../components/ui-kit/Button/Button';
import { fetchUsers, patchUserAction } from '../../services/users/usersSlice';
import styles from '../PositionsPage/PositionPage.module.scss';
import Popup from '../../components/ui-kit/Popup/Popup';

export default function User() {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const { users, user } = useSelector((state) => state.usersState);
  const [isOpen, setOpen] = useState(false);

  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSubmit = () => {
    dispatch(
      patchUserAction({
        id: user.id,
        archived: true,
      })
    );
    console.log('onSubmit');
    handleClose();
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleAddUser = (newUserData) => {
    // Here you would typically send newUserData to the server
    // For now, we'll just add it to the local state
    setUsersList((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUserData },
    ]);
  };

  const columns = [
    { header: 'ФИО', accessor: 'familyName' },
    { header: 'Должность', accessor: 'position' },
    { header: 'Почта', accessor: 'position' },
    { header: 'В архиве', accessor: 'archived' },
    { header: 'Статус', accessor: 'status' }, // Assuming you have a 'status' field in your user data
    { header: '', accessor: 'icon' },
  ];
  return (
    <>
      <section className={userStyle.users}>
        <Navigation isAdmin areCoursesOpened={false} />
        <div className={userStyle.usersContant}>
          <Button
            buttonText="Новый пользователь"
            type="primary"
            icon="white"
            onClick={() => {
              navigate('/users/new');
            }}
          />
          <Table
            columns={columns}
            data={usersList}
            openPopup={() => handleOpenPopup()}
          />
        </div>
      </section>
      <Popup
        title="Перенос пользователя в архив"
        isOpen={isOpen}
        name="user arhcive"
        onSubmit={handleSubmit}
        onClose={() => handleClose()}
      >
        <div className={styles.popupContent}>
          <div className={styles.popupText}>
            Перенести пользователя в архив?
          </div>
          <div className={styles.buttonContainer}>
            <div role="none" onClick={() => handleClose()}>
              <Button type="emptyBorder" buttonText="Отменить" />
            </div>
            <div role="none" onClick={() => handleSubmit()}>
              <Button type="primary" buttonText="В архив" />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
