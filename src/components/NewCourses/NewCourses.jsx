/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types';

import style from './NewCourses.module.scss';

import Input from '../ui-kit/Input/Input';
import Button from '../ui-kit/Buttons/ButtonEmptyBorder/ButtonEmptyBorder';

export default function NewCourses() {
  return (
    <section className={style.sectionNewCourses}>
      <div className={style.sectionNewCourses__container}>
        <h1 className={style.sectionNewCourses__title}>Новый курс</h1>
        <h2 className={style.sectionNewCourses__descriptions}>
          Основная информация
        </h2>
        <form name="newCourse" className={style.NewCoursesForm}>
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Название</span>
            <Input
              name="text"
              placeholder="Напишите название"
              onChange=""
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
            />
          </label>
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Описание</span>
            <Input
              name="text"
              placeholder="Напишите описание"
              onChange=""
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
            />
          </label>
          {/* кнопку нужно дургую на сабмит  */}
          <Button buttonText="Добавить курс" />
        </form>
      </div>
    </section>
  );
}

NewCourses.propTypes = {};

NewCourses.defaultProps = {};
