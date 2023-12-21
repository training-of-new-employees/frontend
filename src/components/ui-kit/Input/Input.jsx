import { func, string } from 'prop-types';
import { useState } from 'react';
import inputStyles from './Input.module.scss';
import useValidation from '../../hooks/useValidation';


// написал classNameInput, classNameDiv чтобы пробросить стили
export default function Input({
  name,
  placeholder,
  onChange,
  classNameInput,
  classNameDiv,
  type,
  minLength,
  maxLength
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = name.toLowerCase().includes('password');

  const isName =
    name.toLowerCase() === 'firstname' ||
    name.toLowerCase() === 'lastname' ||
    name.toLowerCase() === 'middlename';
  const isProfile =
    name.toLowerCase() === 'companyprofile' ||
    name.toLowerCase() === 'emailprofile';

  // eslint-disable-next-line no-redeclare
  const { handleChange, errors } = useValidation();

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
    <div className={`${inputStyles.inputBox} ${classNameDiv}`}>
        <input
          className={`
          ${inputStyles.inputText} 
          ${isName ? inputStyles.inputName : ''} 
          ${isProfile ? inputStyles.inputProfile : ''} 
          ${classNameInput}
          ${errors[name] ? inputStyles.error : ''}
          `}
          name={name}
          required
          minLength={minLength}
          maxLength={maxLength}
          // eslint-disable-next-line no-nested-ternary
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
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
          />
        )}
      </div>
  );
}

Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  onChange: func.isRequired,
  classNameInput: string,
  classNameDiv: string,
  type: string,
  minLength: string,
  maxLength: string
};

Input.defaultProps = {
  classNameInput: '',
  classNameDiv: '',
  type: 'text',
  minLength: '',
  maxLength: ''
};
