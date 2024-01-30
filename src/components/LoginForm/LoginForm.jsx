/* eslint-disable jsx-a11y/control-has-associated-label */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import loginFormStyles from './LoginForm.module.scss';
import login from '../../services/api/login';
import Checkbox from '../ui-kit/Checkbox/Checkbox';
// import { loginActions } from '../../services/slices/login';
// import { setCookie, checkResponse } from '../../utils/helpers';
// import { fetchToken, fetchProfile } from '../../services/profile/profileSlice';
import useInput from '../ui-kit/Input/useInput';
import { fetchToken } from '../../services/profile/profileSlice';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput('', {
    isEmpty: true,
    minLength: 5,
    maxLength: 50,
    type: 'email',
  });
  const password = useInput('', {
    isEmpty: true,
    minLength: 6,
    type: 'password',
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const values = {
      email: email.value,
      password: password.value,
    };
    dispatch(fetchToken(values));
    navigate('/profile');
  };

  return (
    <div className={loginFormStyles.formContainer}>
      <h1 className={loginFormStyles.formTitle}>Авторизация</h1>
      <p className={loginFormStyles.formText}>
        Введите e-mail и пароль, чтобы войти
      </p>
      <form
        className={loginFormStyles.form}
        noValidate
        onSubmit={(e) => onSubmit(e)}
      >
        <input
          className={`${loginFormStyles.input}
            ${
              email.isDirty && email.emailError
                ? loginFormStyles.inputError
                : ''
            }`}
          name="email"
          type="email"
          maxLength={50}
          minLength={7}
          placeholder="E-mail"
          onChange={email.onChange}
          onBlur={email.onBlur}
          value={email.value}
        />
        {email.isEmpty && email.isDirty && (
          <span className={loginFormStyles.spanError}>
            E-mail должен содержать от 5 до 50 символов
          </span>
        )}
        {email.isDirty && email.emailError && (
          <span className={loginFormStyles.spanError}>
            Неверно введен e-mail Пример: people@mail.ru
          </span>
        )}
        <div className={loginFormStyles.passwordContainer}>
          <input
            className={`${loginFormStyles.input}
           ${
             password.isDirty && password.passwordError
               ? loginFormStyles.inputError
               : ''
           }`}
            name="password"
            maxLength={30}
            minLength={6}
            type={showPassword ? 'text' : 'password'}
            placeholder="Введите пароль"
            onChange={password.onChange}
            onBlur={password.onBlur}
            value={password.value}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`${loginFormStyles.passwordButton} ${
              showPassword ? loginFormStyles.passwordButtonShow : ''
            }`}
          />
        </div>
        {password.isEmpty && password.isDirty && (
          <span className={loginFormStyles.spanError}>
            Пароль должен содержать от 6 до 30 символов
          </span>
        )}{' '}
        {password.isDirty && password.passwordError && (
          <span className={loginFormStyles.spanError}>
            Пароль должен содержать хотя бы один большой символ, один маленький
            символ, одну цифру и один специальный символ
          </span>
        )}
        <section className={loginFormStyles.container}>
          <div className={loginFormStyles.checkboxContainer}>
            <Checkbox text="Запомнить меня" />
          </div>
          <button className={loginFormStyles.forgetButton} type="button">
            Забыли пароль?
          </button>
        </section>
        <button
          disabled={!email.isValid || !password.isValid}
          className={`${loginFormStyles.submitUser} hover:bg-[#668447] transition ease-in duration-300 focus:bg-[#374629]`}
          type="submit"
        >
          Войти
        </button>
        <div className={loginFormStyles.orContainer}>
          <span className={loginFormStyles.span} />
          <p className={loginFormStyles.spanText}>или</p>
          <span className={loginFormStyles.span} />
        </div>
        <button
          onClick={() => navigate('/registration')}
          className={loginFormStyles.auth}
          type="button"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
