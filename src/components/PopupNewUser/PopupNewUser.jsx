import PropTypes from 'prop-types';
import useValidation from '../hooks/useValidation';
import Button from '../ui-kit/Button/Button';
import Input from '../ui-kit/Input/Input'
import Popup from '../ui-kit/Popup/Popup'
import newUserStyle from './PopupNewUser.module.scss'

export default function PopupNewUser({isOpen, onClose}) {
    const { values, handleChange } = useValidation();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Реализуйте логику отправки формы
      };

    return (
        <Popup
            name="newUser"
            title="Новый пользователь"
            onSubmit={handleSubmit}
            isOpen={isOpen}
            onClose={onClose}
         >
            <ul className={newUserStyle.popupEditContainer}>
        <li className={newUserStyle.popupEditInput}>
          <label className={newUserStyle.popupEditLabel} htmlFor="lastName">
            Фамилия
          </label>
          <Input
            id="lastName"
            name="lastname"
            type="text"
            placeholder="Введите Фамилию"
            onChange={handleChange}
            values={values.lastName || ''}
          />
        </li>
        <li className={newUserStyle.popupEditInput}>
          <label className={newUserStyle.popupEditLabel} htmlFor="firstName">
            Имя
          </label>
          <Input
            id="firstName"
            name="firstname"
            type="text"
            placeholder="Введите Имя"
            onChange={handleChange}
            values={values.firstName || ''}
          />
        </li>
        <li className={newUserStyle .popupEditInput}>
          <label className={newUserStyle.popupEditLabel} htmlFor="middleName">
            Отчество
          </label>
          <Input
            id="middleName"
            name="middlename"
            type="text"
            placeholder="Введите Отчество"
            onChange={handleChange}
            values={values.middleName || ''}
          />
        </li>
      </ul>
      <ul className={newUserStyle.popupEditText}>
        <li className={newUserStyle.popupEditInput}>
          <label
            className={newUserStyle.popupEditLabel}
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
            values={values.company || ''}
          />
        </li>
        <li className={newUserStyle.popupEditInput}>
          <label className={newUserStyle.popupEditLabel} htmlFor="email">
            E-mail
          </label>
          <Input
            id="email"
            type="email"
            name="emailprofile"
            placeholder="Введите E-mail"
            onChange={handleChange}
            values={values.email || ''}
          />
        </li>
      </ul>
      <div className={newUserStyle.popupEditButton}>
        <Button
          buttonText="Добавить пользователя"
          type="primary"
          // icon='white'
        />
      </div>
      </Popup>
                
    )
}

PopupNewUser.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };