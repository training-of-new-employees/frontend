import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import styles from './PositionPage.module.scss';
import DropdownMenu from '../../components/ui-kit/DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../../components/ui-kit/DropdownMenuButton/DropdownMenuButton';
import Button from '../../components/ui-kit/Button/Button';
import help from '../../images/ui/Bag.svg';
import archive from '../../images/ui/Unarchive.svg';
import plus from '../../images/ui/plus.svg';

export default function PositionPage() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <section className={styles.section}>
      <Navigation isAdmin areCoursesOpened={false} />
      <div className={styles.content}>
        <Button type="primary" buttonText="Новая должность" icon="white" />
        <div className={styles.listCards}>
          <div className={styles.coursesCard}>
            <div className={styles.cardText}>
              <div className={styles.cardTitle}>
                Специалист управления механихации
              </div>
              <div className={styles.coursesCount}>0 уроков</div>
            </div>
            <DropdownMenu isChild className={styles.iconMenu}>
              <div
                role="none"
                onClick={() => {
                  console.log('click для логики редактирования');
                }}
              >
                <DropdownMenuButton IconComponent={help} text="Редактировать" />
              </div>

              <div
                role="none"
                onClick={() => {
                  console.log('click');
                }}
              >
                <DropdownMenuButton
                  IconComponent={archive}
                  text="Перенести в архив"
                />
              </div>
              <div
                role="none"
                onClick={() => {
                  navigate('/position/setting-access');
                  console.log('click');
                }}
              >
                <DropdownMenuButton
                  IconComponent={plus}
                  text="Доступ к курсам"
                />
              </div>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}
