import registerFormStyles from './RegisterForm.module.scss';

// @TODO добавить минимальное и максимальное значение символов в инпутах
// @TODO настроить в будущем ссылку "назад"
// @TODO настроить в будущем кнопку "запомнить меня"
// @TODO сформировать внешний вид чекбоса по макету
// @TODO сделать сабмит

export default function RegisterForm() {
  return (
    <div className={registerFormStyles.formContainer}>
      <h1 className={registerFormStyles.formTitle}>Регистрация на QuickOn</h1>
      <form className={registerFormStyles.form}>
        <p className={registerFormStyles.inputInscription}>E-mail</p>
        <input
          id="register-email"
          required
          className={registerFormStyles.input}
          type="email"
          placeholder="Введите e-mail"
          defaultValue=""
          name="email"
        />
        <p className={registerFormStyles.inputInscription}>Пароль</p>
        <input
          id="register-password"
          required
          className={registerFormStyles.input}
          type="password"
          placeholder="Введите пароль"
          defaultValue=""
          name="password"
        />
        <p className={registerFormStyles.inputInscription}>Компания</p>
        <input
          id="register-company"
          required
          className={registerFormStyles.input}
          type="text"
          placeholder="Введите компанию"
          defaultValue=""
          name="company"
        />
        <div className={registerFormStyles.checkboxContainer}>
          <input
            className={registerFormStyles.checkbox}
            id="register-checkbox"
            type="checkbox"
            name="checkbox"
          />
          <label
            className={registerFormStyles.inputLabel}
            htmlFor="register-checkbox"
          >
            Запомнить меня
          </label>
        </div>
        <div className={registerFormStyles.buttonsContainer}>
          <a className={registerFormStyles.back} to="/login">
            Назад
          </a>
          <button className={registerFormStyles.submit} type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
