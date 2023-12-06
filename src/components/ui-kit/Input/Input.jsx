import { string } from 'prop-types';
import { useState } from 'react';
import { EMAIL_REGEX } from '../../../utils/constants';
import inputStyles from './Input.module.scss'


export default function Input({ name, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = name.toLowerCase() === 'password';
  const isEmail = name.toLowerCase() === 'email';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`${inputStyles.passwordButton} ${showPassword ? inputStyles.passwordButtonShow : ''}` }
          >
          {/* {showPassword ? 'Hide' : 'Show'} Password */}
          </button>
        )}
      </div>
      <span className={inputStyles.inputError} />
    </>
  );
};


Input.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
};
