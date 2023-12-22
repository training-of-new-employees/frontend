import { string } from 'prop-types';
import radioButtonStyle from './RadioButton.module.scss';

export default function RadioButton({ type, name, className }) {
  return (
    <div className={radioButtonStyle.input}>
      <label className={radioButtonStyle.label} htmlFor={name}>
        Переключить
      </label>
      <input type={type} name={name} className={className} />
    </div>
  );
}

RadioButton.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  className: string.isRequired,
};
