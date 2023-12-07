import { string } from 'prop-types';
import buttonRegisterPageStyles from './ButtonRegisterPage.module.scss';

export default function ButtonRegisterPage({ buttonText }) {
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

ButtonRegisterPage.propTypes = {
  buttonText: string.isRequired,
};
