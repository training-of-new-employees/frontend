/* eslint-disable arrow-body-style */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import PopupEditProfile from '../../components/PopupEditProfile/PopupEditProfile';
import ProfileInfo from '../../components/Profile/Profile';

import profileStyles from './Profile.module.scss';
import { fetchProfile } from '../../services/profile/profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
useEffect(() => {
  dispatch(fetchProfile())
}, [dispatch]);
  

  return (
    <section className={profileStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />
      <ProfileInfo onEditProfileClick={openPopup} />
      <PopupEditProfile isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
};
export default Profile;
