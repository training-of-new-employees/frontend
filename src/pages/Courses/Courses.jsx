import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import CoursesContent from './CoursesContent/CoursesContent';
import coursesStyles from './Courses.module.scss';
import { getCoursesAction } from '../../services/courses/coursesSlice';

export default function CoursesPage() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);
  return (
    <section className={coursesStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />
      <CoursesContent />
    </section>
  );
}
