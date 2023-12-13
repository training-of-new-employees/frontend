import loginFormStyles from './LoginForm.module.scss';

// @TODO добавить минимальное и максимальное значение символов в инпутах
// @TODO настроить в будущем кнопку "зарегистрироваться"
// @TODO настроить в будущем кнопку "забыли пароль"
// @TODO настроить в будущем кнопку "запомнить меня"
// @TODO сформировать внешний вид чекбоса по макету
// @TODO сделать сабмит

export default function LoginForm() {
  return (
    <div className={loginFormStyles.formContainer}>
      <h1 className={loginFormStyles.formTitle}>Добро пожаловать!</h1>
      <form className={loginFormStyles.form}>
        <p className={loginFormStyles.inputInscription}>E-mail</p>
        <input
          id="login-email"
          required
          className={loginFormStyles.input}
          type="email"
          placeholder="Введите e-mail"
          defaultValue=""
          name="email"
        />
        <p className={loginFormStyles.inputInscription}>Пароль</p>
        <input
          id="login-password"
          required
          className={loginFormStyles.input}
          type="password"
          placeholder="Введите пароль"
          defaultValue=""
          name="password"
        />
        <div className={loginFormStyles.infoContainer}>
          <div className={loginFormStyles.checkboxContainer}>
            <input
              className={loginFormStyles.checkbox}
              id="login-checkbox"
              type="checkbox"
              name="checkbox"
            />
            <label
              className={loginFormStyles.inputLabel}
              htmlFor="login-checkbox"
            >
              Запомнить меня
            </label>
          </div>
          <a className={loginFormStyles.forgotPassword} to="/forgot">
            Забыли пароль?
          </a>
        </div>
        <div className={loginFormStyles.buttonsContainer}>
          <button className={loginFormStyles.submit} type="submit">
            Войти
          </button>
          <button className={loginFormStyles.button} type="button">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
}
