import ConfirmationInputStyles from './ConfirmationInput.module.scss';

export default function ConfirmationInput() {
  return (
    <div className={ConfirmationInputStyles.inputContainer}>
      <input className={ConfirmationInputStyles.input} />
    </div>
  );
}
