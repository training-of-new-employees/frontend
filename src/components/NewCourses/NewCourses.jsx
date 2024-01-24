/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import style from './NewCourses.module.scss';
import Input from '../ui-kit/Input/Input';
import Button from '../ui-kit/Button/Button';
import { fetchProfile } from '../../services/profile/profileSlice';
import { createCoursesAction } from '../../services/courses/coursesSlice';


export default function NewCourses() {
  const navigate = useNavigate()
  const [course, setCourse] = React.useState();
  const [content, setContent] = React.useState();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profileState);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  function handleCourse(event) {
    setCourse(event.currentTarget.value);
  }

  function handleContent(event) {
    setContent(event.currentTarget.value);
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(
      createCoursesAction({
        archived: true,
        name: course,
        description: content,
      })
    );
    setCourse('');
    console.log('form', course);
    // dispatch(getPositions());
    // navigate(-1);
  }

  return (
    <section className={style.sectionNewCourses}>
      <div className={style.sectionNewCourses__container}>
        <h1 className={style.sectionNewCourses__title}>Новый курс</h1>
        <h2 className={style.sectionNewCourses__descriptions}>
          Основная информация
        </h2>
        <form name="newCourse" className={style.NewCoursesForm} 
          onSubmit={(evt) => submitForm(evt)}
        >
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Название</span>
            <Input
              name="courses"
              placeholder="Напишите название"
              onChange={(event) => handleCourse(event)}
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
              maxLength={20}
              minLength={1}
              value={course || ''}
            />
          </label>
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Описание</span>
            <Input
              name="text"
              placeholder="Напишите описание"
              onChange={(event) => handleContent(event)}
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
              maxLength={20}
              minLength={1}
              value={content || ''}
            />
          </label>
          <Button buttonText="Добавить курс" HTMLType="submit" type="primary" />
        </form>
      </div>
    </section>
  );
}

NewCourses.propTypes = {};

NewCourses.defaultProps = {};
