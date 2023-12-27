import { string } from 'prop-types';
import CheckboxStyles from './Checkbox.module.scss';

export default function RadioButton({ text }) {
  return (
    <div className={CheckboxStyles.input}>
      <label className={CheckboxStyles.label}>
        <input
          type="checkbox"
          name="checkbox"
          className={CheckboxStyles.checkbox}
        />
        <span className={CheckboxStyles.customCheckbox} />
        {text}
      </label>
    </div>
  );
}

RadioButton.propTypes = {
  text: string.isRequired,
};
