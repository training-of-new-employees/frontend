import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/ui-kit/Button/Button';
import styles from './EditCours.module.scss';
import {
  getCoursByIdAction,
  editCoursesAction,
} from '../../../services/courses/coursesSlice';
import Navigation from '../../../components/Navigation/Navigation';
import CoursesSidebar from '../../../components/CoursesSidebar/CoursesSidebar';
import Popup from '../../../components/ui-kit/Popup/Popup';
import coursesStyles from '../Courses.module.scss';
import Input from '../../../components/ui-kit/Input/Input';

export default function EditCours() {
  const [isOpen, setOpen] = React.useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { coursesEdit } = useSelector((state) => state.coursesState);
  const [nameValue, setNameValue] = React.useState(coursesEdit.name);
  const [descriptionValue, setDescriptionValue] = React.useState(
    coursesEdit.description
  );

  function handleOpenPopup() {
    setNameValue(coursesEdit.name);
    setDescriptionValue(coursesEdit.description);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(
      editCoursesAction({
        id: coursesEdit.id,
        name: nameValue,
        description: descriptionValue,
      })
    );
    handleClose();
  }

  React.useEffect(() => {
    dispatch(getCoursByIdAction(id));
  }, [dispatch]);

  function handleName(event) {
    setNameValue(event.currentTarget.value);
  }
  function handleDescription(event) {
    setDescriptionValue(event.currentTarget.value);
  }

  return (
    <>
      <section className={styles.section}>
        <nav className={styles.navigation}>
          <CoursesSidebar isAdmin />
        </nav>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>{coursesEdit.name}</h1>
            <div className={styles.subtitle_container}>
              <h4 className={styles.subtitle}>Основная информация</h4>
              <button
                className={styles.infoEditButton}
                type="button"
                aria-label="Редактировать профиль"
                onClick={handleOpenPopup}
              />
            </div>
            <div className={styles.wrapperText}>
              <div>Название курса: </div>
              <div>{coursesEdit.name}</div>
            </div>
            <div className={styles.wrapperText}>
              <div>Описание курса: </div>
              <div>{coursesEdit.description}</div>
            </div>
          </div>
        </div>
      </section>

      <Popup
        title="Редактирование основной информации"
        isOpen={isOpen}
        name="courses"
        onSubmit={(event) => handleSubmit(event)}
        onClose={() => handleClose()}
      >
        <div className={styles.popupContent}>
          <div className={styles.popupInputs}>
            <label className={styles.popupEditLabel} htmlFor="name">
              Название
            </label>
            <Input
              id="name"
              name="editCours"
              type="text"
              placeholder="Введите Фамилию"
              onChange={(event) => handleName(event)}
              value={nameValue}
              minLength={2}
              maxLength={15}
            />

            <label className={styles.popupEditLabel} htmlFor="description">
              Описание
            </label>
            <Input
              id="description"
              name="editCoursDescription"
              type="text"
              placeholder="Введите Фамилию"
              onChange={(event) => handleDescription(event)}
              value={descriptionValue}
              minLength={2}
              maxLength={15}
            />
          </div>
          <div className={coursesStyles.buttonContainer}>
            <div role="none" onClick={() => handleClose()}>
              <Button type="emptyBorder" buttonText="Отменить" />
            </div>
            <div role="none" onClick={(event) => handleSubmit(event)}>
              <Button type="primary" buttonText="Редактировать" />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
