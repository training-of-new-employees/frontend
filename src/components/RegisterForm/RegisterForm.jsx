import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import registerFormStyles from './RegisterForm.module.scss';
import Input from '../ui-kit/Input/Input';
import Checkbox from '../ui-kit/Checkbox/Checkbox';
import backIcon from '../../images/ui/Back-Icon.svg';
import InputConf from '../ui-kit/ConfirmationInput/ConfirmationInput';
import useValidations from '../hooks/useValidation';
import {
  adminRegister,
  adminVerifyEmail,
} from '../../services/api/admin-register';
import useInput from '../ui-kit/Input/useInput';

export default function RegisterForm() {
  // const { values, handleChange, errors, isValid, validate } = useValidations();
  const [isOpenReg, setOpenReg] = useState(true);
  const [verifyNums, setVerifyNums] = useState(['', '', '', '']);
  const [verificationError, setVerificationError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isPassword, setIsPassword] = useState({
    password: '',
    confirmPassword: '',
  });
  const email = useInput('', {
    isEmpty: true,
    minLength: 5,
    maxLength: 50,
    type: 'email',
    isPassword,
  });
  const company = useInput('', {
    isEmpty: true,
    minLength: 1,
    type: 'company',
    isPassword,
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
  function onClickBack() {
    setOpenReg(true);
  }

  function onVerifyNumbersChange(e, index) {
    const element = e.target;
    const nextSibling = element?.parentElement?.nextElementSibling?.firstChild;
    if (nextSibling) nextSibling.focus();
    else element.blur();
    setVerifyNums((prevState) => {
      const newState = [...prevState];
      [newState[index]] = element.value;
      return newState;
    });
  }

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

  function onLoginClick() {
    navigate('/login');
  }

  function onSubmit(event) {
    event.preventDefault();

    dispatch(adminRegister(email.value, password.value, company.value)).then(
      () => setOpenReg(false)
    );
  }

  function verifyEmail() {
    const code = verifyNums.join('');
    dispatch(adminVerifyEmail(code))
      .then(() => navigate('/login'))
      .catch((error) => {
        setVerificationError('Код введен неверно');
        console.error('Email verification error:', error);
      });
  }
  return (
    <div>
      {isOpenReg ? (
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
              classNameInput={`${registerFormStyles.input}
            ${
              company.isDirty && company.companyError
                ? registerFormStyles.inputError
                : ''
            }`}
              name="company"
              placeholder="Компания"
              onChange={company.onChange}
              value={company.value}
              onBlur={company.onBlur}
            />
            {company.isEmpty && company.isDirty && (
              <span className={registerFormStyles.spanError}>
                Название компаннии должно содержать не менее 1 символа.
              </span>
            )}
            <Input
              classNameInput={`${registerFormStyles.input}
                ${
                  email.isDirty && email.emailError
                    ? registerFormStyles.inputError
                    : ''
                }`}
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={email.onChange}
              value={email.value}
              onBlur={email.onBlur}
            />
            {email.isDirty && email.emailError && (
              <span className={registerFormStyles.spanError}>
                Неверно введен e-mail Пример: people@mail.ru
              </span>
            )}{' '}
            {email.isEmpty && email.isDirty && (
              <span className={registerFormStyles.spanError}>
                E-mail должен содержать от 5 до 50 символов
              </span>
            )}
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
            />
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
              <button className={registerFormStyles.forgetButton} type="button">
                Забыли пароль?
              </button>
            </section>
            <div className={registerFormStyles.buttonsContainer}>
              <button
                className={registerFormStyles.submit}
                type="submit"
                disabled={
                  !email.isValid ||
                  !password.isValid ||
                  !confirmPassword.isValid ||
                  !company.isValid
                }
              >
                Зарегистрироваться
              </button>
              <div className={registerFormStyles.orContainer}>
                <span className={registerFormStyles.span} />
                <p className={registerFormStyles.spanText}>или</p>
                <span className={registerFormStyles.span} />
              </div>
              <button
                className={registerFormStyles.auth}
                type="button"
                onClick={onLoginClick}
              >
                Авторизоваться
              </button>
            </div>
          </form>
        </div>
      ) : (
        <section className={registerFormStyles.section}>
          <form
            className={registerFormStyles.form}
            onSubmit={onSubmit}
            noValidate
          >
            <h1 className={registerFormStyles.title}>Подтверждение e-mail</h1>
            <p className={registerFormStyles.text}>
              Мы отправили вам на e-mail 4х значный код
            </p>
            <p className={registerFormStyles.text}>
              Введите код для подтверждения e-mail
            </p>
            <section className={registerFormStyles.inputSection}>
              <InputConf
                value={verifyNums[0]}
                onChange={(e) => onVerifyNumbersChange(e, 0)}
                maxLength={1}
              />
              <InputConf
                value={verifyNums[1]}
                onChange={(e) => onVerifyNumbersChange(e, 1)}
                maxLength={1}
              />
              <InputConf
                value={verifyNums[2]}
                onChange={(e) => onVerifyNumbersChange(e, 2)}
                maxLength={1}
              />
              <InputConf
                value={verifyNums[3]}
                onChange={(e) => onVerifyNumbersChange(e, 3)}
                maxLength={1}
              />
            </section>
            <span className={registerFormStyles.spanErrorVerify}>
              {verificationError}
            </span>
            <button
              className={registerFormStyles.submitEmail}
              type="button"
              disabled={isButtonDisabled}
              onClick={verifyEmail}
            >
              Подтвердить
            </button>
            <div className={registerFormStyles.containerButton}>
              <button
                type="button"
                className={registerFormStyles.buttonBack}
                onClick={onClickBack}
              >
                <img
                  src={backIcon}
                  alt="Назад"
                  className={registerFormStyles.imageBack}
                />
                Назад
              </button>
              <button
                type="button"
                className={registerFormStyles.buttonAgain}
                onClick={verifyEmail}
              >
                Отправить код повторно
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
