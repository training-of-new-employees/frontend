/* eslint-disable arrow-body-style */
import Navigation from '../../components/Navigation/Navigation';
import PopupEditProfile from '../../components/PopupEditProfile/PopupEditProfile';
import ProfileInfo from '../../components/Profile/Profile';

import profileStyles from './Profile.module.scss';

const Profile = () => {
  return (
    <section className={profileStyles.section}>
      {/* <Navigation />
      <ProfileInfo /> */}
      <PopupEditProfile />
    </section>
  );
};
export default Profile;
