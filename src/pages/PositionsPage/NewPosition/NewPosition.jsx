import React from 'react';
import style from './NewPosition.module.scss';
import Input from '../../../components/ui-kit/Input/Input';
import Button from '../../../components/ui-kit/Button/Button';
import Navigation from '../../../components/Navigation/Navigation';
import sectionStyles from '../PositionPage.module.scss';

export default function NewPosition() {
  const [position, setPosition] = React.useState();

  function handlePosition(event) {
    setPosition(event.currentTarget.value);
  }

  function submitForm(e) {
    e.preventDefault();
    console.log('form', position);
  }

  return (
    <section className={sectionStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <section className={style.sectionNewPositions}>
        <div className={style.sectionNewPositions__container}>
          <h1 className={style.sectionNewPositions__title}>Новая должность</h1>
          <form
            name="newPosition"
            className={style.NewPositionForm}
            onSubmit={(evt) => submitForm(evt)}
          >
            <label
              htmlFor="newPosition"
              className={style.NewPositionForm__label}
            >
              <span className={style.NewPositionForm__titleInput}>
                Название должности
              </span>
              <Input
                value={position || ''}
                name="text"
                placeholder="Напишите название"
                onChange={(event) => handlePosition(event)}
                classNameInput={style.NewPositionForm__input}
                classNameDiv={style.NewPositionForm__divInput}
                minLength={2}
                maxLength={15}
              />
            </label>

            <Button
              buttonText="Добавить курс"
              HTMLType="submit"
              type="primary"
            />
          </form>
        </div>
      </section>
    </section>
  );
}
