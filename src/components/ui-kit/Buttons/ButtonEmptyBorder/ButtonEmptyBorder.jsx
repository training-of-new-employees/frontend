import PropTypes, { string, func } from 'prop-types';
import ButtonEmptyBorderStyles from './ButtonEmptyBorder.module.scss';
import { ReactComponent as PlusIcon } from '../../../../images/ui/Icon-green.svg';
import { ReactComponent as BackIcon } from '../../../../images/ui/Back-Icon.svg';

export default function ButtonEmptyBorder({ buttonText, iconType, onClick }) {
  return (
    <button
      className={ButtonEmptyBorderStyles.button}
      type="button"
      onClick={onClick}
    >
      {iconType === 'plus' && (
        <PlusIcon className={ButtonEmptyBorderStyles.icon} />
      )}
      {iconType === 'back' && (
        <BackIcon className={ButtonEmptyBorderStyles.icon} />
      )}
      {buttonText}
    </button>
  );
}

ButtonEmptyBorder.propTypes = {
  buttonText: string.isRequired,
  iconType: PropTypes.oneOf([string, null, undefined]),
  onClick: func,
};

ButtonEmptyBorder.defaultProps = {
  iconType: null,
  onClick: () => null,
};
