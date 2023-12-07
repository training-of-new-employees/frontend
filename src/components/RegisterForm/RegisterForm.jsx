import PropTypes from 'prop-types';
import registerFormStyles from './RegisterForm.module.scss';
import Input from '../ui-kit/Input/Input';
import Button from '../ui-kit/ButtonRegisterPage/ButtonRegisterPage'; 

export default function RegisterForm({ isDisabled }) {
  
  return (
    <div className = {registerFormStyles.formContainer} >
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
          <Button 
            buttonText='Зарегистрироваться'
          />
          {/* <button 
            className={registerFormStyles.submit} 
            type="submit" 
            // disabled={isDisabled ? true : false}
          >
            Зарегистрироваться
          </button> */}
          <div className={registerFormStyles.spanContainer}>
            <span className={registerFormStyles.span} />
            <p className={registerFormStyles.spanText}>или</p>
            <span className={registerFormStyles.span} />
          </div>
          <button className={registerFormStyles.auth} type='submit'>Авторизоваться</button>
        </div>
      </form>
    </div>
  );
}


RegisterForm.propTypes = {
  isDisabled: PropTypes.bool.isRequired
}
