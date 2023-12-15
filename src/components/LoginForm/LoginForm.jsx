import { string } from 'prop-types';
import loginFormStyles from './LoginForm.module.scss';
import Input from '../ui-kit/Input/Input';

export default function LoginForm({ type }) {
  return (
    <div>
      {type === 'user' ? (
        <div className={loginFormStyles.formContainer}>
          <h1 className={loginFormStyles.formTitle}>Авторизация</h1>
          <p className={loginFormStyles.formText}>
            Придумайте новый пароль, чтобы авторизоваться
          </p>
          <form className={loginFormStyles.form}>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Придумайте пароль" />
            <Input name="repeat password" placeholder="Повторите пароль" />
            <section className={loginFormStyles.container}>
              <div className={loginFormStyles.checkboxContainer}>
                <input
                  className={loginFormStyles.checkbox}
                  id="register-checkbox"
                  type="checkbox"
                  name="checkbox"
                />
                <label
                  className={loginFormStyles.inputLabel}
                  htmlFor="register-checkbox"
                >
                  Запомнить меня
                </label>
              </div>
            </section>
            <button className={loginFormStyles.submitUser} type="submit">
              Войти
            </button>
          </form>
        </div>
      ) : (
        <div className={loginFormStyles.formContainerOpened}>
          <h1 className={loginFormStyles.formTitle}>Авторизация</h1>
          <p className={loginFormStyles.formText}>
            Введите e-mail и пароль, чтобы авторизоваться
          </p>
          <form className={loginFormStyles.form}>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" placeholder="Пароль" />
            <section className={loginFormStyles.container}>
              <div className={loginFormStyles.checkboxContainer}>
                <input
                  className={loginFormStyles.checkbox}
                  id="register-checkbox"
                  type="checkbox"
                  name="checkbox"
                />
                <label
                  className={loginFormStyles.inputLabel}
                  htmlFor="register-checkbox"
                >
                  Запомнить меня
                </label>
              </div>
              <button className={loginFormStyles.forgetButton} type="button">
                Забыли пароль?
              </button>
            </section>
            <div className={loginFormStyles.buttonsContainer}>
              <button className={loginFormStyles.submit} type="submit">
                Войти
              </button>
              <div className={loginFormStyles.orContainer}>
                <span className={loginFormStyles.span} />
                <p className={loginFormStyles.spanText}>или</p>
                <span className={loginFormStyles.span} />
              </div>
              <button className={loginFormStyles.auth} type="button">
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

LoginForm.propTypes = {
  type: string.isRequired,
};
