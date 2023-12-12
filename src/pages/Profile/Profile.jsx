/* eslint-disable arrow-body-style */
import { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import PopupEditProfile from '../../components/PopupEditProfile/PopupEditProfile';
import ProfileInfo from '../../components/Profile/Profile';

import profileStyles from './Profile.module.scss';

const Profile = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className={profileStyles.section}>
      <Navigation />
      <ProfileInfo onEditProfileClick={openPopup} />
      <PopupEditProfile isOpen={isPopupOpen} onClose={closePopup}/>
    </section>
  );
};
export default Profile;
