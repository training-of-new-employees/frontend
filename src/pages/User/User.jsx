import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import Table from '../../components/ui-kit/List/Table'
import userStyle from './User.module.scss'
import PopupNewUser from '../../components/PopupNewUser/PopupNewUser';
import Button from '../../components/ui-kit/Button/Button';

export default function User() {
    const [users, setUsers] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddUser = (newUserData) => {
    // Here you would typically send newUserData to the server
    // For now, we'll just add it to the local state
    setUsers(prevUsers => [...prevUsers, { id: prevUsers.length + 1, ...newUserData }]);
  };


    const columns = [
        { header: 'ФИО', accessor: 'familyName' },
        { header: 'Должность', accessor: 'position' },
        { header: 'Статус', accessor: 'status' }, // Assuming you have a 'status' field in your user data
        { header: '', accessor: 'icon' }
      ];
    return (
        <section className={userStyle.users}>
            <Navigation isAdmin areCoursesOpened={false} />
            <div className={userStyle.usersContant}>
            <Button buttonText="Новый пользователь" type="primary" icon='white' onClick={openPopup}/>
            <Table columns={columns} data={users} />
            </div>
            <PopupNewUser isOpen={isPopupOpen} onClose={closePopup} onAddUser={handleAddUser}/>
        </section>
    )
}