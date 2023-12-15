import { string } from 'prop-types';
import classNames from "classnames";
import ButtonStyles from './Button.module.scss';

export default function Button({ 
    buttonText, 
    type, // 'primary', 'emptyBorder', 'empty'
    icon, // 'white', 'green'
}) {
  return (
    <button 
        className={classNames(
            ButtonStyles.button,
            ButtonStyles[type],
        )} 
        type="button"
    >
        <div 
            className={classNames(   
                ButtonStyles[icon],
            )}
        />
        {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: string.isRequired,
  type: string.isRequired,
  icon: string.isRequired,
};
