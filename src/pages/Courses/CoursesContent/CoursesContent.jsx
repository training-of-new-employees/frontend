import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/ui-kit/Button/Button';
import coursesStyles from '../Courses.module.scss';
import DropdownMenu from '../../../components/ui-kit/DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../../../components/ui-kit/DropdownMenuButton/DropdownMenuButton';
import help from '../../../images/ui/Bag.svg';
import archive from '../../../images/ui/Unarchive.svg';
import Popup from '../../../components/ui-kit/Popup/Popup';
import {
  editCoursesAction,
  getCoursesByIdReducer,
} from '../../../services/courses/coursesSlice';
import Card from '../../../components/ui-kit/Card/Card';

export default function CoursesContent() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.coursesState);
  const [currentCours, setCuurentCours] = React.useState();
  const navigate = useNavigate();
  const [isOpen, setOpen] = React.useState(false);
  console.log('courses', courses);
  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const handleSubmit = () => {
    dispatch(
      editCoursesAction({
        id: currentCours.id,
        archived: true,
      })
    );
    handleClose();
  };
  return (
    <>
      <div className={coursesStyles.content}>
        <div role="none" onClick={() => navigate('/courses/new-courses')}>
          <Button type="primary" buttonText="Новый курс" icon="white" />
        </div>

        <div className={coursesStyles.listCards}>
          {courses.length !== 0 &&
            Array.from(courses).map((item) => (
              <div key={item.id}>
                {item.archived === true ? (
                  <div
                    role="none"
                    onClick={(event) => {
                      dispatch(getCoursesByIdReducer(item));
                      navigate(`/courses/${item.id}`);
                      event.stopPropagation();
                    }}
                  >
                    <Card
                      key={item.id}
                      text={item.name}
                      isArchived={item.archived}
                    />
                  </div>
                ) : (
                  <div key={item.id} className={coursesStyles.coursesCard}>
                    <div
                      role="none"
                      className={coursesStyles.cardText}
                      onClick={(event) => {
                        dispatch(getCoursesByIdReducer(item));
                        navigate(`/courses/${item.id}`);
                        event.stopPropagation();
                      }}
                    >
                      <div className={coursesStyles.cardTitle}>{item.name}</div>
                      <div className={coursesStyles.coursesCount}>0 уроков</div>
                    </div>
                    <DropdownMenu isChild className={coursesStyles.iconMenu}>
                      <div
                        role="none"
                        onClick={() => {
                          console.log('click для логики редактирования');
                        }}
                      >
                        <DropdownMenuButton
                          IconComponent={help}
                          text="Редактировать"
                        />
                      </div>

                      <div
                        role="none"
                        onClick={() => {
                          setCuurentCours(item);
                          handleOpenPopup();
                        }}
                      >
                        <DropdownMenuButton
                          IconComponent={archive}
                          text="Перенести в архив"
                        />
                      </div>
                    </DropdownMenu>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>

      <Popup
        title="Перенос курса в Архив"
        isOpen={isOpen}
        name="courses"
        onSubmit={handleSubmit}
        onClose={() => handleClose()}
      >
        <div className={coursesStyles.popupContent}>
          <div className={coursesStyles.popupText}>
            При переносе курса в архив, курс станет не доступен для прохождения
          </div>
          <div className={coursesStyles.buttonContainer}>
            <div role="none" onClick={() => handleClose()}>
              <Button type="emptyBorder" buttonText="Отменить" />
            </div>
            <div role="none" onClick={() => handleSubmit()}>
              <Button type="primary" buttonText="В архив" />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
