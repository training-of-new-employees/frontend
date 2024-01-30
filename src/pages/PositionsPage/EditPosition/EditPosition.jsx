import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './EditPosition.module.scss';
import Input from '../../../components/ui-kit/Input/Input';
import Button from '../../../components/ui-kit/Button/Button';
import Navigation from '../../../components/Navigation/Navigation';
import sectionStyles from '../PositionPage.module.scss';
import {
  getPosition,
  editPositionAction,
} from '../../../services/positions/positionsSlice';

export default function EditPosition() {
  const { positionEdit, status } = useSelector((state) => state.positionState);
  const [position, setPosition] = React.useState({
    id: positionEdit.id,
    name: positionEdit.name,
    company_id: positionEdit.company_id,
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosition(id));
  }, [dispatch, id]);

  function handlePosition(event) {
    setPosition({ ...position, name: event.currentTarget.value });
  }

  function submitForm(e) {
    e.preventDefault();
    dispatch(editPositionAction(position));

  }

  return (
    <section className={sectionStyles.section}>
      <Navigation isAdmin areCoursesOpened={false} />

      <section className={style.sectionNewPositions}>
        <div className={style.sectionNewPositions__container}>
          <h1 className={style.sectionNewPositions__title}>
            Название должности
          </h1>
          <form
            name="editPosition"
            className={style.NewPositionForm}
            onSubmit={(evt) => submitForm(evt)}
          >
            <label
              htmlFor="editPosition"
              className={style.NewPositionForm__label}
            >
              <span className={style.NewPositionForm__titleInput}>
                Название должности
              </span>
              <Input
                value={status === 'loading' ? 'loading...' : position.name}
                name="text"
                placeholder="Напишите название"
                onChange={(event) => handlePosition(event)}
                classNameInput={style.NewPositionForm__input}
                classNameDiv={style.NewPositionForm__divInput}
                minLength={2}
                maxLength={256}
              />
            </label>

            <Button
              buttonText="Переименовать должность"
              HTMLType="submit"
              type="primary"
            />
          </form>
        </div>
      </section>
    </section>
  );
}
