import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import Table from '../../components/ui-kit/List/Table';
import userStyle from './User.module.scss';
import Button from '../../components/ui-kit/Button/Button';
import { fetchUsers } from '../../services/users/usersSlice';

export default function User() {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState([]);
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.usersState);

  console.log(users);

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
    { header: 'Статус', accessor: 'status' }, // Assuming you have a 'status' field in your user data
    { header: '', accessor: 'icon' },
  ];
  return (
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
        <Table columns={columns} data={usersList} />
      </div>
    </section>
  );
}
