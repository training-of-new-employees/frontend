import PropTypes from 'prop-types';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';

export default function Navigation({ areCoursesOpened }) {
    const isAdmin = localStorage.getItem('role') === 'ADMIN'
  return areCoursesOpened ? (
    <CoursesSidebar isAdmin={isAdmin} />
  ) : (
    <ProfileSidebar isAdmin={isAdmin} />
  );
}

Navigation.propTypes = {
  // isAdmin: PropTypes.bool,
  areCoursesOpened: PropTypes.bool.isRequired,
};

// Navigation.defaultProps = {
//   isAdmin: false,
// };
