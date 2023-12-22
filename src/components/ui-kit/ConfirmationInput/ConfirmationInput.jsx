import PropTypes from 'prop-types';
import ConfirmationInputStyles from './ConfirmationInput.module.scss';

export default function ConfirmationInput({ value, onChange }) {
  return (
    <div className={ConfirmationInputStyles.inputContainer}>
      <input
        className={ConfirmationInputStyles.input}
        value={value || ''}
        onChange={onChange}
        maxLength={1}
      />
    </div>
  );
}

ConfirmationInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

ConfirmationInput.defaultProps = {
  onChange: () => null,
};
