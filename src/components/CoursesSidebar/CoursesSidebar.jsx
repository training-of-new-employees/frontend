import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import navigationStyles from '../Navigation/Navigation.module.scss';
import FilesIcon from '../../images/ui/Files.svg';
import FolderIcon from '../../images/ui/Folder.svg';
import ButtonEmptyBorder from '../ui-kit/Buttons/ButtonEmptyBorder/ButtonEmptyBorder';

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
      {isAdmin ? (
        <>
          <NavLink
            to="/courses"
            className={({ isActive }) => {
              const linkClasses = [navigationStyles.item];
              if (isActive) linkClasses.push(navigationStyles.item_active);
              return linkClasses.join(' ');
            }}
          >
            <div className={navigationStyles.itemContainer}>
              <img
                className={navigationStyles.itemImage}
                alt="иконка"
                src={FilesIcon}
              />
              <p>Основная информация</p>
            </div>
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => {
              const linkClasses = [navigationStyles.item];
              if (isActive) linkClasses.push(navigationStyles.item_active);
              return linkClasses.join(' ');
            }}
          >
            <div className={navigationStyles.itemContainer}>
              <img
                className={navigationStyles.itemImage}
                alt="иконка"
                src={FolderIcon}
              />
              <p>Материалы</p>
            </div>
          </NavLink>
        </>
      ) : (
        <>
          {/* after connection to API change 'to' props with lesson-id & add lesson-id in key props */}
          {testData.map((item) => (
            <NavLink
              to="/lesson"
              className={({ isActive }) => {
                const linkClasses = [navigationStyles.item];
                if (isActive) linkClasses.push(navigationStyles.item_active);
                return linkClasses.join(' ');
              }}
            >
              <div className={navigationStyles.itemContainer}>
                <p>{item}</p>
              </div>
            </NavLink>
          ))}
        </>
      )}
    </nav>
  );
}

CoursesSidebar.propTypes = {
  isAdmin: PropTypes.bool,
};

CoursesSidebar.defaultProps = {
  isAdmin: false,
};
