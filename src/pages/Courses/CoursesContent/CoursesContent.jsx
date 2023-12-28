import React from 'react';
import Button from '../../../components/ui-kit/Button/Button';
import coursesStyles from '../Courses.module.scss';
import DropdownMenu from '../../../components/ui-kit/DropdownMenu/DropdownMenu';
import DropdownMenuButton from '../../../components/ui-kit/DropdownMenuButton/DropdownMenuButton';
import help from '../../../images/ui/Bag.svg';
import archive from '../../../images/ui/Unarchive.svg';
import Popup from '../../../components/ui-kit/Popup/Popup';

export default function CoursesContent() {
  const [isOpen, setOpen] = React.useState(false);

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
      <div className={coursesStyles.content}>
        <Button type="primary" buttonText="Новый курс" icon="white" />
        <div className={coursesStyles.listCards}>
          {/* <Card text='Культура и ценности компании' isArchived/> */}

          <div className={coursesStyles.coursesCard}>
            <div className={coursesStyles.cardText}>
              <div className={coursesStyles.cardTitle}>
                Культура и ценности компании
              </div>
              <div className={coursesStyles.coursesCount}>0 уроков</div>
            </div>
            <DropdownMenu isChild className={coursesStyles.iconMenu}>
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
                  handleOpenPopup();
                }}
              >
                <DropdownMenuButton
                  IconComponent={archive}
                  text="Перенести в архив"
                />
              </div>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <Popup
        title="Перенос курса в Архив"
        isOpen={isOpen}
        name="courses"
        onSubmit={handleSubmit}
        onClose={() => handleClose()}
      >
        <div className={coursesStyles.popupContent}>
          <div className={coursesStyles.popupText}>
            При переносе курса в архив, курс станет не доступен для прохождения
          </div>
          <div className={coursesStyles.buttonContainer}>
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
