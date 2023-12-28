/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import style from '../NewCourses/NewCourses.module.scss';
import Input from '../ui-kit/Input/Input';
import Button from '../ui-kit/Button/Button';

export default function NewLessons() {
  return (
    <section className={style.sectionNewCourses}>
      <div className={style.sectionNewCourses__container}>
        <h1 className={style.sectionNewCourses__title}>Новый урок</h1>
        <form name="newCourse" className={style.NewCoursesForm}>
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Название</span>
            <Input
              name="text"
              placeholder="Название урока"
              onChange=""
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
            />
          </label>
          <label className={style.NewCoursesForm__label}>
            <span className={style.NewCoursesForm__titleInput}>Текст</span>
            <Input
              name="text"
              placeholder="Содержание урока"
              onChange=""
              classNameInput={style.NewCoursesForm__input}
              classNameDiv={style.NewCoursesForm__divInput}
            />
          </label>
          <Button
            buttonText="Загрузить изображение"
            type="empty"
            HTMLType="button"
            icon="green"
            extraClass={style.addButton}
          />
          <Button buttonText="Добавить урок" type="primary" HTMLType="submit" />
        </form>
      </div>
    </section>
  );
}

NewLessons.propTypes = {};

NewLessons.defaultProps = {};
