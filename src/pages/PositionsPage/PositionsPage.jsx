import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NoPositions from './NoPositions/NoPositions';
import Navigation from '../../components/Navigation/Navigation';
import styles from './PositionPage.module.scss';

import PositionContent from './PositionContent/PositionContent';

import { getPositions } from '../../services/positions/positionsSlice';

export default function PositionPage() {
  const dispatch = useDispatch();
  const { positions, status, error } = useSelector(
    (state) => state.positionState
  );

  React.useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  return (
    <section className={styles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      {positions.length === 0 && <NoPositions />}
      {positions.length !== 0 && <PositionContent />}
    </section>
  );
}
