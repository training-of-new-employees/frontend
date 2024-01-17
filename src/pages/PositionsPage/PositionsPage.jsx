import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import styles from './PositionPage.module.scss';

import NoPositions from './NoPositions/NoPositions';
import PositionContent from './PositionContent/PositionContent';
import NewPosition from './NewPosition/NewPosition';

export default function PositionPage() {
  return (
    <section className={styles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <PositionContent />
      {/* <NoPositions /> */}
      {/* <NewPosition /> */}

    </section>
  );
}
