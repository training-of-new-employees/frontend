import { useState } from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import registerFormStyles from './RegisterEmployeeForm.module.scss';
import Input from '../ui-kit/Input/Input';
import Checkbox from '../ui-kit/Checkbox/Checkbox';
import {
  adminRegister,
} from '../../services/api/admin-register';
import useInput from '../ui-kit/Input/useInput';
import {setPassword} from "../../services/api/user-set-password";
import {fetchToken} from "../../services/profile/profileSlice";

export default function RegisterEmployeeForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isPassword, setIsPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const password = useInput('', {
    isEmpty: true,
    minLength: 6,
    type: 'password',
    isPassword,
  });
  const confirmPassword = useInput('', {
    isEmpty: true,
    minLength: 6,
    type: 'confirmPassword',
    isPassword,
  });

  const inputChange = (event) => {
    const { value, name } = event.target;
    setIsPassword({
      ...isPassword,
      [name]: value,
    });
  };
  const handleChangeConfirmPassword = (event) => {
    inputChange(event);
    confirmPassword.onChange(event);
  };
  const handleChangePassword = (event) => {
    inputChange(event);
    password.onChange(event);
  };

  function onSubmit(event) {
      event.preventDefault();
      console.log('test')
      setPassword(searchParams.get("email"), searchParams.get("invite"), password.value)
          .then((data) => {
              if (data) {
                  localStorage.setItem("role", "USER");
                  localStorage.setItem("token", data.token);
                  navigate('/profile')
              }
          })
          .catch((error) => {
              if (error.status === 401) {
                  console.log('Вы ввели неправильный логин или пароль.');

              }
                  console.log('При авторизации произошла ошибка.');
          })
  }

  return (
    <div>
        <div className={registerFormStyles.formContainerOpened}>
          <h1 className={registerFormStyles.formTitle}>Регистрация</h1>
          <p className={registerFormStyles.formText}>
            Введите E-mail и пароль, чтобы авторизоваться
          </p>
          <form
            className={registerFormStyles.form}
            noValidate
            onSubmit={onSubmit}
          >
            <Input
              classNameInput={`${registerFormStyles.input}`}
              name="email"
              type="email"
              placeholder=""
              onChange={() => ''}
              onBlur={() => ''}
              value={searchParams.get("email")}
              disabled
            />
            <Input
              classNameInput={`${registerFormStyles.input}
                ${
                  password.isDirty && password.passwordError
                    ? registerFormStyles.inputError
                    : ''
                }`}
              name="password"
              placeholder="Пароль "
              type="password"
              onChange={handleChangePassword}
              value={password.value}
              onBlur={password.onBlur}
            />
            {confirmPassword.isDirty && confirmPassword.passwordConfirm && (
              <span className={registerFormStyles.spanError}>
                Пароли не совпадают
              </span>
            )}
            {password.isEmpty && password.isDirty && (
              <span className={registerFormStyles.spanError}>
                Пароль должен содержать от 6 до 30 символов
              </span>
            )}
            {password.isDirty && password.passwordError && (
              <span className={registerFormStyles.spanError}>
                Пароль должен содержать хотя бы один большой символ, один
                маленький символ, одну цифру и один специальный символ
              </span>
            )}
            <Input
              classNameInput={`${registerFormStyles.input}
                ${
                  confirmPassword.isDirty && confirmPassword.passwordError
                    ? registerFormStyles.inputError
                    : ''
                }`}
              name="confirmPassword"
              placeholder="Пароль"
              type="password"
              onChange={handleChangeConfirmPassword}
              value={confirmPassword.value}
              onBlur={confirmPassword.onBlur}
            />{' '}
            {confirmPassword.isEmpty && confirmPassword.isDirty && (
              <span className={registerFormStyles.spanError}>
                Пароль должен содержать от 6 до 30 символов
              </span>
            )}
            {confirmPassword.isDirty && confirmPassword.passwordError && (
              <span className={registerFormStyles.spanError}>
                Пароль должен содержать хотя бы один большой символ, один
                маленький символ, одну цифру и один специальный символ
              </span>
            )}{' '}
            {confirmPassword.isDirty && confirmPassword.passwordConfirm && (
              <span className={registerFormStyles.spanError}>
                Пароли не совпадают
              </span>
            )}
            <section className={registerFormStyles.container}>
              <div className={registerFormStyles.checkboxContainer}>
                <Checkbox text="Запомнить меня" />
              </div>
            </section>
            <div className={registerFormStyles.buttonsContainer}>
              <button
                className={registerFormStyles.submit}
                type="submit"
                disabled={
                  !password.isValid ||
                  !confirmPassword.isValid
                }
              >
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
