import React from 'react';
import { useNavigate } from 'react-router-dom';

import NewLessons from '../../../components/NewLesson/NewLesson';
import styles from '../Lessons.module.scss';
import CoursesSidebar from '../../../components/CoursesSidebar/CoursesSidebar';

export default function CreateLesson() {
    const navigate = useNavigate();
  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <CoursesSidebar isAdmin />
      </nav>
      <div className={styles.container}>
        <NewLessons />
      </div>
    </section>
  );
}


CreateLesson.propTypes = {
};

CreateLesson.defaultProps = {
};
