import React from 'react';
import { useDispatch } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import styles from './PositionPage.module.scss';

import PositionContent from './PositionContent/PositionContent';

import { getPositions } from '../../services/positions/positionsSlice';

export default function PositionPage() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <PositionContent />
      {/* <NoPositions /> */}
      {/* <NewPosition /> */}
    </section>
  );
}
