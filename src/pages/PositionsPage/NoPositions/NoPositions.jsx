import React from 'react'
import styles from './NoPosition.module.scss';
import Button from '../../../components/ui-kit/Button/Button';
import image from '../../../images/ui/NoPosition.png';

export default function NoPositions() {
  return (
    <section className={styles.section}>
    <div className={styles.container}>
      <img
        className={styles.image}
        src={image}
        alt="Картинка телескопа"
      />
      <p className={styles.text}>Пока у вас нет должностей. Добавьте должности для  сортировки сотрудников уже сегодня!</p>
      <Button buttonText="Новая должность" type='primary' icon="white" />
    </div>
  </section>
  )
}

