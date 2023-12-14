import { string } from 'prop-types';
import ButtonEmptyBorderStyles from './ButtonEmptyBorder.module.scss';
import { ReactComponent as PlusIcon } from '../../../../images/ui/Icon-green.svg';
import { ReactComponent as BackIcon } from '../../../../images/ui/Back-Icon.svg';
import Header from '../../../Header/Header';

export default function ButtonEmptyBorder({ buttonText, iconType }) {
  return (
    <button className={ButtonEmptyBorderStyles.button} type="button">
      {iconType === 'plus' ? (
        <PlusIcon className={ButtonEmptyBorderStyles.icon} />
      ) : (
        <BackIcon className={ButtonEmptyBorderStyles.icon} />
      )}
      {buttonText}
    </button>
  );
}

ButtonEmptyBorder.propTypes = {
  buttonText: string.isRequired,
  iconType: string,
};

ButtonEmptyBorder.defaultProps = {
  iconType: 'plus',
};
