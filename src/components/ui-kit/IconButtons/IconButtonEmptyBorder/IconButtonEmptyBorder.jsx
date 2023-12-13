import IconButtonEmptyBorderStyles from './IconButtonEmptyBorder.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon-green.svg';

export default function IconButtonEmptyBorder() {
  return (
    <button className={IconButtonEmptyBorderStyles.button} type="button">
      <ReactComponent className={IconButtonEmptyBorderStyles.icon} />
      {/* eslint-disable-next-line */}
    </button>
  );
}
