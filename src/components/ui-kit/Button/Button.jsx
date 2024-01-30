/* eslint-disable react/prop-types */
import { func, oneOfType, string } from 'prop-types';

import classNames from 'classnames';
import ButtonStyles from './Button.module.scss';

export default function Button({
  disabled,
  buttonText,
  type, // 'primary', 'emptyBorder', 'empty'
  icon, // 'white', 'green', 'back'
  HTMLType, // 'submit', 'button', 'reset'
  onClick,
  extraClass,
}) {
  return (
    /* eslint-disable react/button-has-type */
    <button
      disabled={disabled}
      className={classNames(
        ButtonStyles.button,
        ButtonStyles[type],
        extraClass
      )}
      type={HTMLType}
      onClick={onClick}
    >
      {icon && <div className={classNames(ButtonStyles[icon])} />}
      {buttonText}
    </button>
  );
}
