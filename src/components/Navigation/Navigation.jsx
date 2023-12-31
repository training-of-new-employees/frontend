import PropTypes from 'prop-types';
import ProfileSidebar from '../ProfileSidebar/ProfileSidebar';
import CoursesSidebar from '../CoursesSidebar/CoursesSidebar';

export default function Navigation({ isAdmin, areCoursesOpened }) {
  return areCoursesOpened ? (
    <CoursesSidebar isAdmin={isAdmin} />
  ) : (
    <ProfileSidebar isAdmin={isAdmin} />
  );
}

Navigation.propTypes = {
  isAdmin: PropTypes.bool,
  areCoursesOpened: PropTypes.bool.isRequired,
};

Navigation.defaultProps = {
  isAdmin: false,
};
