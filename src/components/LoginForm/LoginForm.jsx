import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { string } from 'prop-types';
import loginFormStyles from './LoginForm.module.scss';
import Input from '../ui-kit/Input/Input';
import useValidation from '../hooks/useValidation';
import { login } from '../../services/api/login';
import Checkbox from '../ui-kit/Checkbox/Checkbox';

export default function LoginForm({ type }) {
  const { values, handleChange } = useValidation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(login(values.email, values.password)).then(() =>
      navigate('/profile')
    );
  }

  function onRegisterClick() {
    navigate('/registration');
  }

  return (
    <div>
      {type === 'user' ? (
        <div className={loginFormStyles.formContainer}>
          <h1 className={loginFormStyles.formTitle}>Авторизация</h1>
          <p className={loginFormStyles.formText}>
            Придумайте новый пароль, чтобы авторизоваться
          </p>
          <form className={loginFormStyles.form} onSubmit={onSubmit} noValidate>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={handleChange}
              values={values.email || ''}
            />
            <Input
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              onChange={handleChange}
              values={values.password || ''}
            />
            <Input
              name="password"
              type="password"
              placeholder="Повторите пароль"
              onChange={handleChange}
              values={values.password || ''}
            />
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
              values={values.email || ''}
            />
            <Input
              name="password"
              type="password"
              placeholder="Придумайте пароль"
              onChange={handleChange}
              values={values.password || ''}
            />
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
              <button className={loginFormStyles.submit} type="submit">
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
  type: string.isRequired,
};
