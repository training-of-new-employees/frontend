import { func, number, string, bool } from 'prop-types';
import { useState } from 'react';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss';
import useValidations from '../../hooks/useValidation';

// написал classNameInput, classNameDiv чтобы пробросить стили
export default function Input({
  name,
  placeholder,
  onChange,
  classNameInput,
  classNameDiv,
  type,
  minLength,
  maxLength,
  value,
  disabled,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = name.toLowerCase().includes('password');
  const isEmail = name.toLowerCase() === 'email';
  const isName =
    name.toLowerCase() === 'firstname' ||
    name.toLowerCase() === 'lastname' ||
    name.toLowerCase() === 'middlename';
  const isProfile =
    name.toLowerCase() === 'companyprofile' ||
    name.toLowerCase() === 'emailprofile';

  // eslint-disable-next-line no-redeclare
  const { handleChange } = useValidations();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleChangeValues(e) {
    handleChange(e);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <>
      <div className={`${inputStyles.inputBox} ${classNameDiv}`}>
        <input
          disabled={disabled}
          className={`
          ${inputStyles.inputText} 
          ${isName ? inputStyles.inputName : ''} 
          ${isProfile ? inputStyles.inputProfile : ''} 
          ${classNameInput}
          `}
          name={name}
          // eslint-disable-next-line no-nested-ternary
          type={isPassword ? (showPassword ? 'text' : 'password') : ''}
          pattern={isEmail ? EMAIL_REGEX : ''}
          placeholder={placeholder}
          onChange={handleChangeValues}
        />
        {isPassword && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`${inputStyles.passwordButton} ${
              showPassword ? inputStyles.passwordButtonShow : ''
            }`}
            disabled={false} // поставила временная заглушку, иначе всплывает ошибка, что переменная undefined
          />
        )}
      </div>
      <span className={inputStyles.inputError} />
    </>
  );
}

Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  classNameInput: string,
  classNameDiv: string,
  type: string,
  minLength: number,
  maxLength: number,
  value: string,
  disabled: bool,
};

Input.defaultProps = {
  disabled: false,
  value: '',
  classNameInput: '',
  classNameDiv: '',
  minLength: number,
  maxLength: number,
  type: string,
};
