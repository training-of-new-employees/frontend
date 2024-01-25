import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/ui-kit/Button/Button';
import styles from './EditCours.module.scss';
import { getCoursByIdAction } from '../../../services/courses/coursesSlice';
import Navigation from '../../../components/Navigation/Navigation';
import CoursesSidebar from '../../../components/CoursesSidebar/CoursesSidebar';

export default function EditCours() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { coursesEdit } = useSelector((state) => state.coursesState);
  console.log(coursesEdit);

  //   React.useEffect(() => {
  //     dispatch(getCoursByIdAction(id));
  //   }, [dispatch]);

  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <CoursesSidebar isAdmin/>
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
              // onClick={handleEditProfileClick}
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
  );
}
