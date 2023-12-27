import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import CoursesContent from './CoursesContent/CoursesContent';
import coursesStyles from './Courses.module.scss';

export default function CoursesPage() {
  return (
    <section className={coursesStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />
      <CoursesContent />
    </section>
  );
}
