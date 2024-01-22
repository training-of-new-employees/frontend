<<<<<<< HEAD
import { bool, func, string } from 'prop-types';
=======
import { func, number, string, bool } from 'prop-types';
>>>>>>> 411a2ed7c44665388d4a2742419133f4b6fee17c
import { useState } from 'react';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss';
import useValidation from '../../hooks/useValidation';

// написал classNameInput, classNameDiv чтобы пробросить стили
export default function Input({
  name,
  placeholder,
  onChange,
  classNameInput,
  classNameDiv,
<<<<<<< HEAD
=======
  type,
  minLength,
  maxLength,
  value,
  disabled
>>>>>>> 411a2ed7c44665388d4a2742419133f4b6fee17c
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
  const { handleChange } = useValidation();

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
          disabled={false} // поставила временная заглушку, иначе всплывает ошибка, что переменная undefined
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
<<<<<<< HEAD
};

Input.defaultProps = {
=======
  type: string,
  minLength: number,
  maxLength: number,
  value: string,
  disabled: bool
};

Input.defaultProps = {
  disabled: false,
  value: '',
>>>>>>> 411a2ed7c44665388d4a2742419133f4b6fee17c
  classNameInput: '',
  classNameDiv: '',
};
