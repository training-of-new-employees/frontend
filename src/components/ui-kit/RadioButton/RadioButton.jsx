import { string } from 'prop-types';
import radioButtonStyle from './RadioButton.module.scss'

export default function RadioButton({ type, name, className}) {
  return (
    <label className={radioButtonStyle.label}>
      <input
        type={type}
        name={name}
        className={className}
      />
    </label>
  )
}

RadioButton.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  className: string.isRequired
};
