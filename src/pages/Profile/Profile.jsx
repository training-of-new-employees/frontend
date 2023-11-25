/* eslint-disable arrow-body-style */
import Navigation from '../../components/Navigation/Navigation';
import ProfileInfo from '../../components/Profile/Profile';

import profileStyles from './Profile.module.scss';

const Profile = () => {
  return (
    <section className={profileStyles.section}>
      <Navigation />
      <ProfileInfo />
    </section>
  );
};
export default Profile;
