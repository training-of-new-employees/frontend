import IconButtonFilledStyles from './IconButtonFilled.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon.svg';

export default function IconButtonFilled() {
  return (
    <button className={IconButtonFilledStyles.button} type="button">
      <ReactComponent className={IconButtonFilledStyles.icon} />
      {/* eslint-disable-next-line */}
    </button>
  );
}
