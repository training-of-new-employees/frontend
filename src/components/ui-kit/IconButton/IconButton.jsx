import { string } from 'prop-types';
import classNames from 'classnames';
import IconButtonStyles from './IconButton.module.scss';

export default function IconButton({
  type = 'emptyBorder', // 'primary', 'emptyBorder', 'empty'
  icon = 'green', // 'white', 'green'
}) {
  return (
    <button
      className={classNames(IconButtonStyles.button, IconButtonStyles[type])}
      type="button"
    >
      <div className={classNames(IconButtonStyles[icon])} />
      {/* eslint-disable-next-line */}
    </button>
  );
}

IconButton.propTypes = {
  type: string.isRequired,
  icon: string.isRequired,
};
