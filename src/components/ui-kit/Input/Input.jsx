import { bool, func, string } from 'prop-types';
import { useState } from 'react';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss'
import useValidation from '../../hooks/useValidation';


export default function Input({ name, placeholder, onChange, disabled}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = name.toLowerCase() === 'password';
  const isEmail = name.toLowerCase() === 'email';
  const [edit, setEdit] = useState(false);
  // eslint-disable-next-line no-redeclare
  const { handleChange } = useValidation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleChangeValues(e) {
    handleChange(e); 
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <>
      <div className={inputStyles.inputBox}>
        <input
          className={inputStyles.inputText}
          name={name}
          // eslint-disable-next-line no-nested-ternary
          type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
          pattern={isEmail ? EMAIL_REGEX : ''}
          placeholder={placeholder}
          onChange={handleChangeValues}
          disabled={disabled}
        />
        {isPassword && (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`${inputStyles.passwordButton} ${showPassword ? inputStyles.passwordButtonShow : ''}`}
            disabled={!edit}
          />
        )}
      </div>
      <span className={inputStyles.inputError} />
    </>
  );
};


Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  // eslint-disable-next-line react/require-default-props
  onChange: func,
  // eslint-disable-next-line react/require-default-props
  disabled: bool,
};
