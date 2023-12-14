import PropTypes from 'prop-types';
import Input from '../ui-kit/Input/Input';
import Popup from '../ui-kit/Popup/Popup';
import popupEditstyle from './PopupEditProfile.module.scss';
import useValidation from '../hooks/useValidation';
// import ButtonFilled from '../ui-kit/Buttons/ButtonFilled/ButtonFilled';
import Button from '../ui-kit/Button/Button';

export default function PopupEditProfile({ isOpen, onClose }) {
  const { values, handleChange } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Реализуйте логику отправки формы
  };

  return (
    <Popup
      name="editProfile"
      title="Редактирование основной информации"
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ul className={popupEditstyle.popupEditContainer}>
        <li className={popupEditstyle.popupEditInput}>
          <label className={popupEditstyle.popupEditLabel} htmlFor="lastName">
            Фамилия
          </label>
          <Input
            id="lastName"
            name="lastname"
            type="text"
            placeholder="Введите Фамилию"
            onChange={handleChange}
            values={values.lastName}
          />
        </li>
        <li className={popupEditstyle.popupEditInput}>
          <label className={popupEditstyle.popupEditLabel} htmlFor="firstName">
            Имя
          </label>
          <Input
            id="firstName"
            name="firstname"
            type="text"
            placeholder="Введите Имя"
            onChange={handleChange}
            values={values.firstNameName}
          />
        </li>
        <li className={popupEditstyle.popupEditInput}>
          <label className={popupEditstyle.popupEditLabel} htmlFor="middleName">
            Отчество
          </label>
          <Input
            id="middleName"
            name="middlename"
            type="text"
            placeholder="Введите Отчество"
            onChange={handleChange}
            values={values.middleNameName}
          />
        </li>
      </ul>
      <ul className={popupEditstyle.popupEditText}>
        <li className={popupEditstyle.popupEditInput}>
          <label
            className={popupEditstyle.popupEditLabel}
            htmlFor="companyprofile"
          >
            Компания
          </label>
          <Input
            id="companyprofile"
            type="text"
            name="companyprofile"
            placeholder="Введите название компании"
            onChange={handleChange}
          />
        </li>
        <li className={popupEditstyle.popupEditInput}>
          <label className={popupEditstyle.popupEditLabel} htmlFor="email">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            name="emailprofile"
            placeholder="Введите E-mail"
            onChange={handleChange}
          />
        </li>
      </ul>
      <div className={popupEditstyle.popupEditButton}>
        <Button 
          buttonText='&Отменить'
          type='primary'
          // icon='white'
        />
        <Button 
          buttonText='&Сохранить&nbsp;изменения'
          type='primary'
          // icon='white'
        />
        {/* <ButtonFilled type="button">&Отменить</ButtonFilled>
        <ButtonFilled type="button">&Сохранить&nbsp;изменения</ButtonFilled> */}
      </div>
    </Popup>
  );
}

PopupEditProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
