import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../PositionPage.module.scss';
import DropdownMenu from '../../../components/ui-kit/DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../../../components/ui-kit/DropdownMenuButton/DropdownMenuButton';
import Button from '../../../components/ui-kit/Button/Button';

import help from '../../../images/ui/Bag.svg';
import archive from '../../../images/ui/Unarchive.svg';
import plus from '../../../images/ui/plus.svg';
import Popup from '../../../components/ui-kit/Popup/Popup';

export default function PositionContent() {
  const [isOpen, setOpen] = React.useState(false);

  const navigate = useNavigate();
  console.log(navigate);

  function handleOpenPopup() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSubmit = () => {
    console.log('onSubmit');
  };
  return (
    <>
      <div className={styles.content}>
        <div role="none" onClick={() => navigate('/position/new-positions')}>
          <Button type="primary" buttonText="Новая должность" icon="white" />
        </div>

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
                    navigate('/position/1')
                  console.log('click для логики редактирования');
                }}
              >
                <DropdownMenuButton IconComponent={help} text="Редактировать" />
              </div>

              <div
                role="none"
                onClick={() => {
                  handleOpenPopup();
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
