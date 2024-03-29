import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import registerFormStyles from './RegisterForm.module.scss';
import Input from '../ui-kit/Input/Input';
import Checkbox from '../ui-kit/Checkbox/Checkbox';
import backIcon from '../../images/ui/Back-Icon.svg';
import InputConf from '../ui-kit/ConfirmationInput/ConfirmationInput';
import useValidation from '../hooks/useValidation';
import {
  adminRegister,
  adminVerifyEmail,
} from '../../services/api/admin-register';

export default function RegisterForm() {
  const { values, handleChange } = useValidation();
  const [isOpenReg, setOpenReg] = useState(true);
  const [verifyNums, setVerifyNums] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDisabled = false;

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

  function onLoginClick() {
    navigate('/login');
  }

  function onSubmit(event) {
    event.preventDefault();
    dispatch(adminRegister(values.email, values.password, values.company)).then(
      () => setOpenReg(false)
    );
  }

  function verifyEmail() {
    const code = verifyNums.join('');
    dispatch(adminVerifyEmail(code)).then(() => navigate('/login'));
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
            onSubmit={onSubmit}
            noValidate
          >
            <Input
              name="company"
              placeholder="Компания"
              onChange={handleChange}
              values={values.company || ''}
            />
            <Input
              name="email"
              placeholder="E-mail"
              type="email"
              onChange={handleChange}
              values={values.email || ''}
            />
            <Input
              name="password"
              placeholder="Пароль"
              type="password"
              onChange={handleChange}
              values={values.password || ''}
            />
            <Input
              name="repeat password"
              placeholder="Повторите пароль"
              onChange={() => null}
            />
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
                disabled={isDisabled}
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
          <form className={registerFormStyles.form}>
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
              />
              <InputConf
                value={verifyNums[1]}
                onChange={(e) => onVerifyNumbersChange(e, 1)}
              />
              <InputConf
                value={verifyNums[2]}
                onChange={(e) => onVerifyNumbersChange(e, 2)}
              />
              <InputConf
                value={verifyNums[3]}
                onChange={(e) => onVerifyNumbersChange(e, 3)}
              />
            </section>
            <button
              className={registerFormStyles.submitEmail}
              type="button"
              disabled={isDisabled}
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
