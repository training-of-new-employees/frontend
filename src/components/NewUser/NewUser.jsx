import useValidation from '../hooks/useValidation';
import Button from '../ui-kit/Button/Button';
import Input from '../ui-kit/Input/Input'
import newUserStyle from './NewUser.module.scss'
import Navigation from '../Navigation/Navigation';

export default function NewUser() {
  const { values, handleChange } = useValidation();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className={newUserStyle.newUser}>
      <Navigation />
      <div className={newUserStyle.newUserContant}>
        <h1 className={newUserStyle.newUserTitle}>Новый пользователь</h1>
        <ul className={newUserStyle.newUserContainer}>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="lastName">
              Фамилия
            </label>
            <Input
              id="lastName"
              name="lastname"
              type="text"
              placeholder="Введите Фамилию"
              onChange={handleChange}
              value={values.lastName || ''}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="firstName">
              Имя
            </label>
            <Input
              id="firstName"
              name="firstname"
              type="text"
              placeholder="Введите Имя"
              onChange={handleChange}
              value={values.firstName || ''}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="middleName">
              Отчество
            </label>
            <Input
              id="middleName"
              name="middlename"
              type="text"
              placeholder="Введите Отчество"
              onChange={handleChange}
              value={values.middleName || ''}
            />
          </li>
        </ul>
        <ul className={newUserStyle.newUserText}>
          <li className={newUserStyle.newUserInput}>
            <label
              className={newUserStyle.newUserLabel}
              htmlFor="companyprofile"
            >
              Должность
            </label>
            <Input
              id="companyprofile"
              type="text"
              name="companyprofile"
              placeholder="Выберите подходящую должность"
              onChange={handleChange}
              value={values.position || ''}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label className={newUserStyle.newUserLabel} htmlFor="email">
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              name="emailprofile"
              placeholder="Введите E-mail"
              onChange={handleChange}
              value={values.email || ''}
            />
          </li>
          <li className={newUserStyle.newUserInput}>
            <label
              className={newUserStyle.newUserLabel}
              htmlFor="companyprofile"
            >
              Пригласительная ссылка
            </label>
            <Input
              id="companyprofile"
              type="text"
              name="companyprofile"
              placeholder=""
              onChange={handleChange}
              value=''
            />
          </li>
        </ul>
        <div className={newUserStyle.newUserButton}>
          <p className={newUserStyle.newUserButtonTitle}>При создании пользователя на указанный e-mail придет пригласительная ссылка на платформу</p>
          <Button
            buttonText="Добавить пользователя"
            type="primary"
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>

  )
}
