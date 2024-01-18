import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';
import styles from './PositionPage.module.scss';
import NoPositions from './NoPositions/NoPositions';
import PositionContent from './PositionContent/PositionContent';
import NewPosition from './NewPosition/NewPosition';
import { getPositions } from '../../services/positions/positionsSlice';


export default function PositionPage() {
  const dispatch = useDispatch();

React.useEffect(() => {
dispatch(getPositions());
}, [dispatch])


  return (
    <section className={styles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <PositionContent />
      {/* <NoPositions /> */}
      {/* <NewPosition /> */}

    </section>
  );
}
