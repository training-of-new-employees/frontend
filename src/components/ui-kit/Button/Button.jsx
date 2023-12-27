import { func, oneOfType, string } from 'prop-types';
import classNames from 'classnames';
import ButtonStyles from './Button.module.scss';

export default function Button({
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

Button.propTypes = {
  buttonText: string.isRequired,
  type: string.isRequired,
  icon: oneOfType([string, null]),
  HTMLType: string,
  onClick: func,
  extraClass: oneOfType([string, null]),
};

Button.defaultProps = {
  icon: null,
  HTMLType: 'button',
  onClick: () => null,
  extraClass: null,
};
