import { string } from 'prop-types';
import ButtonEmptyStyles from './ButtonEmpty.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon-green.svg';

export default function ButtonEmpty({ buttonText }) {
  return (
    <button className={ButtonEmptyStyles.button} type="button">
      <ReactComponent className={ButtonEmptyStyles.icon} />
      text
      {buttonText}
    </button>
  );
}

ButtonEmpty.propTypes = {
  buttonText: string.isRequired,
};
