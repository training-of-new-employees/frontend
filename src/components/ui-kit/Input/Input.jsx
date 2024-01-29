import { func, string, bool, number } from 'prop-types';
import { useState } from 'react';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss';

// написал classNameInput, classNameDiv чтобы пробросить стили
export default function Input({
  name,
  placeholder,
  value,
  classNameInput,
  classNameDiv,
  onChange,
  disabled,
  onBlur,
  minLength,
  maxLength
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
          value={value}
          onChange={onChange}
          name={name}
          onBlur={onBlur}
          // eslint-disable-next-line no-nested-ternary
          type={isPassword ? (showPassword ? 'text' : 'password') : ''}
          pattern={isEmail && EMAIL_REGEX}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          // onChange={handleChangeValues}
        />
        {isPassword && (
          <button
            aria-label="button"
            type="button"
            onClick={togglePasswordVisibility}
            className={`${inputStyles.passwordButton} ${
              showPassword ? inputStyles.passwordButtonShow : ''
            }`}
            disabled={disabled} // поставила временная заглушку, иначе всплывает ошибка, что переменная undefined
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
  onBlur: func,
  // type: string,
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
  onBlur: null,
  // type: '',
  minLength: number,
  maxLength: number,
};
