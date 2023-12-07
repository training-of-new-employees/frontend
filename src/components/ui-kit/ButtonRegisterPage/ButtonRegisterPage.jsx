import { string } from 'prop-types';
import buttonRegisterPageStyles from './ButtonRegisterPage.module.scss';

export default function Button({ buttonText }) {
  return (
    <button
      className={buttonRegisterPageStyles.submit}
      type="submit"
    // disabled={isDisabled ? true : false}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: string.isRequired,
};
