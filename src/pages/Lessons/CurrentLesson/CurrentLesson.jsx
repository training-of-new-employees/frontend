import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CurrentLesson.module.scss';
import NewLessons from '../../../components/NewLesson/NewLesson';
import CoursesSidebar from '../../../components/CoursesSidebar/CoursesSidebar';
import {
  getLessonsAction,
  getLessonAction,
  getCurrentLessonByIdReducer,
} from '../../../services/lessons/lessonsSlice';
import Button from '../../../components/ui-kit/Button/Button';

export default function CurrentLesson() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lessons, currentLesson } = useSelector((state) => state.lessonsState);

  React.useEffect(() => {
    dispatch(getLessonAction(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    dispatch(getLessonsAction(currentLesson.course_id));
  }, [dispatch, currentLesson]);

  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <CoursesSidebar isAdmin={false} textButton="Назад к курсу" />
      </nav>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>{currentLesson.name}</div>
          <div className={styles.contentLesson}>{currentLesson.content}</div>
          {currentLesson.url_picture ? (
            <img
              src={currentLesson.url_picture}
              alt="картинка урока"
              className={styles.lessonImage}
            />
          ) : null}

          <div className={styles.ButtonContainer}>
            <div
              role="none"
              onClick={() => {
                const pastLesson = currentLesson.id - 1;
                if (lessons.find((item) => item.id === pastLesson)) {
                  dispatch(getLessonAction(pastLesson));
                  navigate(
                    `/courses/${currentLesson.course_id}/lessons/${pastLesson}`
                  );
                } else {
                  navigate(`/courses/${currentLesson.course_id}/lessons`);
                }
              }}
            >
              <Button buttonText="Предыдущий" type="primary" />
            </div>

            <div
              role="none"
              onClick={() => {
                const nextLesson = currentLesson.id + 1;
                if (lessons.find((item) => item.id === nextLesson)) {
                  dispatch(getLessonAction(nextLesson));
                  navigate(
                    `/courses/${currentLesson.course_id}/lessons/${nextLesson}`
                  );
                } else {
                  navigate(`/courses/${currentLesson.course_id}/lessons`);
                }
              }}
            >
              <Button buttonText="Следующий" type="primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
