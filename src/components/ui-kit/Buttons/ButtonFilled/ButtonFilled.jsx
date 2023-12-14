import { string } from 'prop-types';
import buttonFilledStyles from './ButtonFilled.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon.svg';

export default function ButtonFilled({ buttonText }) {
  return (
    <button className={buttonFilledStyles.button} type="button">
      <ReactComponent className={buttonFilledStyles.icon} />
      {buttonText}
    </button>
  );
}

ButtonFilled.propTypes = {
  buttonText: string.isRequired,
};
