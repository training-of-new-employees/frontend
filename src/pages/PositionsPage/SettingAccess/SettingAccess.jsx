import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SettingAccess.module.scss';
import ButtonEmptyBorder from '../../../components/ui-kit/Buttons/ButtonEmptyBorder/ButtonEmptyBorder';
import Card from '../../../components/ui-kit/Card/Card';
import Button from '../../../components/ui-kit/Button/Button';

export default function SettingAccess() {
  const navigate = useNavigate();

  function serializeForm(formNode) {
    const { elements } = formNode;

    const data = Array.from(elements)
      .map((element) => {
        const { name, type } = element;
        const value = type === 'checkbox' ? element.checked : element.value;

        return { name, value };
      })
      .filter((item) => !!item.name);

    console.log(data);
  }

  function handleSubmit(event) {
    const applicantForm = document.getElementById('test');

    event.preventDefault();
    serializeForm(applicantForm);
  }

  return (
    <section className={styles.section}>
      <nav className={styles.navigation}>
        <div className={styles.navButton}>
          <ButtonEmptyBorder
            type="button"
            buttonText="К курсам"
            iconType="back"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      </nav>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Открыть доступ к курсам</h1>
          <h6 className={styles.subtitle}>
            Выберите необходимые курсы и откройте доступ для новой должности
          </h6>
          <form
            id="test"
            onSubmit={(event) => handleSubmit(event)}
            className={styles.form}
          >
            <div className={styles.cardList}>
              <Card isAdmin text="Система электронного документооборота" />
              <Card isAdmin text="Система электронного документооборота" />
              <Card isAdmin text="Система электронного документооборота" />
              <Card isAdmin text="Система электронного документооборота" />
              <Card isAdmin text="Система электронного документооборота" />
              <Card isAdmin text="Система электронного документооборота" />
            </div>

            <Button buttonText="Открыть доступ" type="primary" icon="white" />
          </form>
        </div>
      </div>
    </section>
  );
}