import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bool } from 'prop-types';
import loginFormStyles from './LoginForm.module.scss';
import Input from '../ui-kit/Input/Input';
import useValidation from '../hooks/useValidation';
import { login } from '../../services/api/login';
import Checkbox from '../ui-kit/Checkbox/Checkbox';


export default function LoginForm({ isAdmin }) {
  const { values, handleChange, errors, validate, isValid, resetForm } = useValidation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    validate();
    resetForm({}, true);
    if (isValid) {
      dispatch(login(values.email, values.password)).then(() =>
        navigate('/profile')
      );
    }
  }

  function onRegisterClick() {
    navigate('/registration');
    resetForm({}, true)
  }

  return (
    <div>
      {!isAdmin ? (
        <div className={loginFormStyles.formContainer}>
          <h1 className={loginFormStyles.formTitle}>Авторизация</h1>
          <p className={loginFormStyles.formText}>
            Придумайте новый пароль, чтобы авторизоваться
          </p>
          <form className={loginFormStyles.form} onSubmit={onSubmit} noValidate>
            <Input classNameInput={errors.email ? loginFormStyles.inputError : ''}
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email || ''}
              minLength="5"
              maxLength="30"
            />
            <span className={loginFormStyles.spanError}>
              {errors.email &&
                (values.email.length < 5 || values.email.length > 50
                  ? 'E-mail должен содержать от 5 до 50 символов'
                  : 'Неверно введен e-mail Пример: people@mail.ru')}
            </span>
            <Input
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              onChange={handleChange}
              value={values.password || ''}
              minLength="6"
              maxLength="30"
            />
            <span className={loginFormStyles.spanError}>
              {errors.password &&
                (values.password.length < 6 || values.password.length > 30
                  ? 'Пароль должен содержать не менее 6 символов'
                  : '')}
            </span>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              value={values.confirmPassword || ''}
              minLength="6"
              maxLength="30"
            />
            <span className={loginFormStyles.spanError}>
              {errors.confirmPassword &&
                (values.confirmPassword !== values.password
                    ? 'Пароли не совпадают'
                    : '')}
            </span>
            <section className={loginFormStyles.container}>
              <div className={loginFormStyles.checkboxContainer}>
                <Checkbox
                  text='Запомнить меня'
                />
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
          <form className={loginFormStyles.form} onSubmit={onSubmit} noValidate>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              value={values.email || ''}
              minLength="5"
              maxLength="30"
            />
            <span className={loginFormStyles.spanError}>
              {errors.email &&
                (values.email.length < 5 || values.email.length > 50
                  ? 'E-mail должен содержать от 5 до 50 символов'
                  : 'Неверно введен e-mail Пример: people@mail.ru')}
            </span>
            <Input classNameInput={errors ? loginFormStyles.inputError : ''}
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              onChange={handleChange}
              value={values.password || ''}
              minLength="6"
              maxLength="30"
            />
            <span className={loginFormStyles.spanError}>
              {errors.password &&
                (values.password.length < 6 || values.password.length > 30
                  ? 'Пароль должен содержать не менее 6 символов'
                  : '')}
            </span>
            <section className={loginFormStyles.container}>
              <div className={loginFormStyles.checkboxContainer}>
                <Checkbox
                  text='Запомнить меня'
                />
              </div>
              <button className={loginFormStyles.forgetButton} type="button">
                Забыли пароль?
              </button>
            </section>
            <div className={loginFormStyles.buttonsContainer}>
              <button className={loginFormStyles.submit} type="submit"
                disabled={!isValid}>
                Войти
              </button>
              <div className={loginFormStyles.orContainer}>
                <span className={loginFormStyles.span} />
                <p className={loginFormStyles.spanText}>или</p>
                <span className={loginFormStyles.span} />
              </div>
              <button
                className={loginFormStyles.auth}
                type="button"
                onClick={onRegisterClick}
              >
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
  isAdmin: bool,
};

LoginForm.defaultProps = {
  isAdmin: false,
};
