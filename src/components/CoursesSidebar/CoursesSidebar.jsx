import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import navigationStyles from '../Navigation/Navigation.module.scss';
import CoursesList from '../CoursesList/CoursesList';
import CoursesMenu from '../CoursesMenu/CoursesMenu';
import Button from '../ui-kit/Button/Button';

export default function CoursesSidebar({ isAdmin }) {
  const testData = ['Lesson 1', 'Lesson 2', 'Lesson 3'];
  const navigate = useNavigate();
  const handleBackButtonClick = useCallback(() => {
    navigate('/courses');
  }, [navigate]);

  return (
    <nav className={navigationStyles.navigation}>
      <div className={navigationStyles.navButton}>
        <Button
          HTMLType="button"
          type="emptyBorder"
          buttonText="К курсам"
          icon="back"
          onClick={handleBackButtonClick}
        />
      </div>
      {isAdmin ? <CoursesMenu /> : <CoursesList />}
    </nav>
  );
}

CoursesSidebar.propTypes = {
  isAdmin: PropTypes.bool,
};

CoursesSidebar.defaultProps = {
  isAdmin: false,
};
