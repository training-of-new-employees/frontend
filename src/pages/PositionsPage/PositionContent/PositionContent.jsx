import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from '../PositionPage.module.scss';
import DropdownMenu from '../../../components/ui-kit/DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../../../components/ui-kit/DropdownMenuButton/DropdownMenuButton';
import Button from '../../../components/ui-kit/Button/Button';

import help from '../../../images/ui/Bag.svg';
import archive from '../../../images/ui/Unarchive.svg';
import plus from '../../../images/ui/plus.svg';
import Popup from '../../../components/ui-kit/Popup/Popup';

import { archivedPosition, getPositionInCourses, getPosition } from '../../../services/positions/positionsSlice';

export default function PositionContent() {
  const {positions, status, error} = useSelector((state) => state.positionState);
  const [isOpen, setOpen] = React.useState(false);
  const [currentPosition, setCurrentPosition] = React.useState(null);
  const dispatch = useDispatch()



  const navigate = useNavigate();

  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClose() {
    setCurrentPosition(null)
    setOpen(false);
  }

  const handleSubmit = () => {
    dispatch(archivedPosition(currentPosition))
    console.log('onSubmit');
    handleClose();
  };

  return (
    <>
      <div className={styles.content}>
        <div role="none" onClick={() => navigate('/position/new-positions')}>
          <Button type="primary" buttonText="Новая должность" icon="white" />
        </div>
        {status === 'loading' && <h2>loading...</h2>}{' '}
        {/* потом добавить спиннер и убрать */}
        {error && <h2>{error}</h2>}{' '}
        {/* потом добавить модалку ошибки и убрать */}
        <div className={styles.listCards}>
          {positions.length !== 0 && Array.from(positions).map((item) => (
            
              <div key={item.id} className={styles.coursesCard}>
                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>
              
                    {item.name}
                  </div>
                  <div className={styles.coursesCount}>0 уроков</div>
                </div>
                <DropdownMenu isChild className={styles.iconMenu}>
                  <div
                    role="none"
                    onClick={() => {
                      dispatch(getPosition(item.id))
                      navigate(`/position/${item.id}`);
                      console.log('click для логики редактирования');
                    }}
                  >
                    <DropdownMenuButton
                      IconComponent={help}
                      text="Редактировать"
                    />
                  </div>

                  <div
                    role="none"
                    onClick={() => {
                      handleOpenPopup();
                      setCurrentPosition(item);
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
                      dispatch(getPositionInCourses(item))
                      navigate(`/position/setting-access/${item.id}`);
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
            ))}
        </div>
      </div>
      <Popup
        title="Перенос должности в Архив"
        isOpen={isOpen}
        name="positions"
        onSubmit={handleSubmit}
        onClose={() => handleClose()}
      >
        <div className={styles.popupContent}>
          <div className={styles.popupText}>
            При переносе в архив пользователи в должности утратят доступ к
            системе
          </div>
          <div className={styles.buttonContainer}>
            <div role="none" onClick={() => handleClose()}>
              <Button type="emptyBorder" buttonText="Отменить" />
            </div>
            <div role="none" onClick={() => handleSubmit()}>
              <Button type="primary" buttonText="В архив" />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
}
