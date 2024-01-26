/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../services/profile/profileSlice';
import style from '../NewCourses/NewCourses.module.scss';
import styleImage from './NewLesson.module.scss';
import coursesStyles from '../../pages/Courses/Courses.module.scss';
import Input from '../ui-kit/Input/Input';
import Button from '../ui-kit/Button/Button';
import { createLessonAction } from '../../services/lessons/lessonsSlice';
import Popup from '../ui-kit/Popup/Popup';

export default function NewLessons() {
  const {id} = useParams();
  const [nameLesson, setNameLesson] = React.useState();
  const [contentLesson, setContentLesson] = React.useState();
  const [isOpen, setOpen] = React.useState(false);
  const [linkImage, setLinkImage] = React.useState();

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleNameLesson(event) {
    setNameLesson(event.currentTarget.value);
  }
  function handleLinkImage(event) {
    setLinkImage(event.currentTarget.value);
  }

  function handleContentLesson(event) {
    setContentLesson(event.currentTarget.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // dispatch(
    //   editCoursesAction({
    //     id: currentCours.id,
    //     archived: true,
    //   })
    // );
    handleClose();
  };

  function submitForm(e) {
    e.preventDefault();
    dispatch(
      createLessonAction({
        course_id: Number(id),
        name: nameLesson,
        content: contentLesson,
        url_picture: linkImage || '',
      })
    );
    setNameLesson('');
    setContentLesson('');
    console.log('form', nameLesson, contentLesson, linkImage);
    // dispatch(getPositions());
    // navigate(-1);
  }
  return (
    <>
      <section className={style.sectionNewCourses}>
        <div className={style.sectionNewCourses__container}>
          <h1 className={style.sectionNewCourses__title}>Новый урок</h1>
          <form
            name="newLesson"
            className={style.NewCoursesForm}
            onSubmit={(evt) => submitForm(evt)}
          >
            <label className={style.NewCoursesForm__label}>
              <span className={style.NewCoursesForm__titleInput}>Название</span>
              <Input
                name="text"
                placeholder="Название урока"
                onChange={(event) => handleNameLesson(event)}
                classNameInput={style.NewCoursesForm__input}
                classNameDiv={style.NewCoursesForm__divInput}
                maxLength={20}
                minLength={5}
                value={nameLesson || ''}
              />
            </label>
            <label className={style.NewCoursesForm__label}>
              <span className={style.NewCoursesForm__titleInput}>Текст</span>
              <Input
                name="text"
                placeholder="Содержание урока"
                onChange={(event) => handleContentLesson(event)}
                classNameInput={style.NewCoursesForm__input}
                classNameDiv={style.NewCoursesForm__divInput}
                maxLength={500}
                minLength={5}
                value={contentLesson || ''}
              />
            </label>

            <div role="none" onClick={() => handleOpenPopup()}>
              <Button
                buttonText="Загрузить изображение"
                type="empty"
                HTMLType="button"
                icon="green"
                extraClass={style.addButton}
              />
              {linkImage &&  <img className={styleImage.image} alt="картинка загружаемая" src={linkImage} /> }
             
            </div>
            <Button
              buttonText="Добавить урок"
              type="primary"
              HTMLType="submit"
            />
          </form>
        </div>
      </section>
      <Popup
        title="Добавить ссылку на изображение"
        isOpen={isOpen}
        name="courses"
        onSubmit={handleSubmit}
        onClose={() => handleClose()}
      >
        <div className={coursesStyles.popupContent}>
          <Input
            name="url"
            type="url"
            placeholder="https://"
            onChange={(event) => handleLinkImage(event)}
            classNameInput={style.NewCoursesForm__input}
            classNameDiv={style.NewCoursesForm__divInput}
            maxLength={500}
            minLength={5}
            value={linkImage || ''}
          />
          <div className={coursesStyles.buttonContainer}>
            <div role="none" onClick={() => handleClose()}>
              <Button type="emptyBorder" buttonText="Отменить" />
            </div>
            <div role="none" onClick={(event) => handleSubmit(event)}>
              <Button type="primary" buttonText="В архив" />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}

NewLessons.propTypes = {};

NewLessons.defaultProps = {};
