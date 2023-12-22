import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import navigationStyles from '../Navigation/Navigation.module.scss';
import FilesIcon from '../../images/ui/Files.svg';
import FolderIcon from '../../images/ui/Folder.svg';
import ButtonEmptyBorder from '../ui-kit/Buttons/ButtonEmptyBorder/ButtonEmptyBorder';
import CoursesList from '../CoursesList/CoursesList';
import CoursesMenu from '../CoursesMenu/CoursesMenu';

export default function CoursesSidebar({ isAdmin }) {
  const testData = ['Lesson 1', 'Lesson 2', 'Lesson 3'];
  const navigate = useNavigate();
  const handleBackButtonClick = useCallback(() => {
    navigate('/courses');
  }, [navigate]);

  return (
    <nav className={navigationStyles.navigation}>
      <div className={navigationStyles.navButton}>
        <ButtonEmptyBorder
          type="button"
          buttonText="К курсам"
          iconType="back"
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
