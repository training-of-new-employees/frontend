import { string } from 'prop-types';
import ButtonEmptyBorderStyles from './ButtonEmptyBorder.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon-green.svg';

export default function ButtonEmptyBorder({ buttonText }) {
  return (
    <button className={ButtonEmptyBorderStyles.button} type="button">
      <ReactComponent className={ButtonEmptyBorderStyles.icon} />
      text
      {buttonText}
    </button>
  );
}

ButtonEmptyBorder.propTypes = {
  buttonText: string.isRequired,
};
