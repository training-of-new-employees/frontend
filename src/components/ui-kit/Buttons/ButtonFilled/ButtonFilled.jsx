import PropTypes from 'prop-types';
import buttonFilledStyles from './ButtonFilled.module.scss';
import { ReactComponent as Icon } from '../../../../images/ui/Icon.svg';

export default function ButtonFilled({ buttonText }) {
  return (
    <button className={buttonFilledStyles.buttonFilled} type="button">
      <Icon />
      {buttonText}
    </button>
  );
}

ButtonFilled.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
