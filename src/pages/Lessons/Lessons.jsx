import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Lessons.module.scss';
import CoursesSidebar from '../../components/CoursesSidebar/CoursesSidebar';
import Button from '../../components/ui-kit/Button/Button';
import { getLessonsAction } from '../../services/lessons/lessonsSlice';
import ListLessons from '../../components/ui-kit/List/List';

export default function Lessons() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { coursesEdit } = useSelector((state) => state.coursesState);
  const { lessons } = useSelector((state) => state.lessonsState);

  React.useEffect(() => {
    dispatch(getLessonsAction(id));
  }, [dispatch]);

  const columns = [
    { header: 'Название', accessor: 'name' },
    { header: 'Автор', accessor: 'author' },
    { header: 'Статус', accessor: 'status' }, // Assuming you have a 'status' field in your user data
    { header: '', accessor: 'icon' },
  ];

  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <CoursesSidebar isAdmin />
      </nav>
      <div className={styles.container}>
        <div className={styles.headerLesson}>
          <div className={styles.title}>Материалы курса</div>
          <div
            role="none"
            onClick={() => navigate(`/courses/${id}/new-lesson`)}
          >
            <Button type="primary" icon="white" buttonText="Новый урок" />
          </div>
        </div>
        <ListLessons columns={columns} data={lessons} />
      </div>
    </section>
  );
}
