import { useState } from 'react';
import registerFormStyles from './RegisterForm.module.scss';
import Input from '../ui-kit/Input/Input';
import backIcon from '../../images/ui/Back-Icon.svg';
import InputConf from '../ui-kit/ConfirmationInput/ConfirmationInput';


export default function RegisterForm() {

  const [isOpenReg, setOpenReg] = useState(true);

  const isDisabled = false;

  function onClickReg() {
    setOpenReg(false)
  }

  function onClickBack() {
    setOpenReg(true)
  }

  return (
    <div>
      {isOpenReg ?
        <div
          className={registerFormStyles.formContainerOpened}
        >
          <h1 className={registerFormStyles.formTitle}>Регистрация</h1>
          <p className={registerFormStyles.formText}>Введите E-mail и пароль, чтобы авторизоваться</p>
          <form className={registerFormStyles.form}>
            <Input
              name='company'
              placeholder='Компания'
            />
            <Input
              name='email'
              placeholder='E-mail'
            />
            <Input
              name='password'
              placeholder='Пароль'
            />
            <Input
              name='repeat password'
              placeholder='Повторите пароль'
            />
            <section className={registerFormStyles.container}>
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
              <button
                className={registerFormStyles.forgetButton}
                type='button'
              >
                Забыли пароль?
              </button>
            </section>
            <div className={registerFormStyles.buttonsContainer}>
              <button
                className={registerFormStyles.submit}
                type="submit"
                onSubmit={onClickReg}
                // type='button'
                // onClick={onClickReg}
                disabled={isDisabled}
              >
                Зарегистрироваться
              </button>
              <div className={registerFormStyles.spanContainer}>
                <span className={registerFormStyles.span} />
                <p className={registerFormStyles.spanText}>или</p>
                <span className={registerFormStyles.span} />
              </div>
              <button
                className={registerFormStyles.auth}
                type='button'
              >
                Авторизоваться
              </button>
            </div>
          </form>
        </div>
        :
        <section className={registerFormStyles.section}>
          <form className={registerFormStyles.form}>
            <h1 className={registerFormStyles.title}>Подверждение e-mail</h1>
            <p className={registerFormStyles.text}>Мы отправили вам на e-mail 4х значный код</p>
            <p className={registerFormStyles.text}>Введите код для подверждения e-mail</p>
            <section className={registerFormStyles.inputSection}>
              <InputConf />
              <InputConf />
              <InputConf />
              <InputConf />
            </section>
            <button
              className={registerFormStyles.submitEmail}
              type="button"
              disabled={isDisabled}
            >
              Подтвердить
            </button>
            <div className={registerFormStyles.containerButton}>
              <button
                type='button'
                className={registerFormStyles.buttonBack}
                onClick={onClickBack}
              >
                <img
                  src={backIcon}
                  alt='Назад'
                  className={registerFormStyles.imageBack}
                />
                Назад
              </button>
              <button
                type='button'
                className={registerFormStyles.buttonAgain}
              >
                Отправить код повторно
              </button>
            </div>
          </form>
        </section>
      }
    </div>
  );
}

