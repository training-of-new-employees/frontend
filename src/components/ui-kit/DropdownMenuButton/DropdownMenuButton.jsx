import { string } from 'prop-types';
import DropdownMenuButtonStyles from './DropdownMenuButton.module.scss';
import { ReactComponent } from '../../../images/ui/Menu-Icon.svg';

export default function DropdownMenuButton({ text, IconComponent }) {
  return (
    <li>
      <button className={DropdownMenuButtonStyles.item} type="button">
        <img
          src={IconComponent}
          className={DropdownMenuButtonStyles.icon}
          alt="иконка"
        />
        {/* <IconComponent className={DropdownMenuButtonStyles.icon} /> */}
        {/* <ReactComponent className={DropdownMenuButtonStyles.icon} /> */}
        <p className={DropdownMenuButtonStyles.text}> {text}</p>
      </button>
    </li>
  );
}

DropdownMenuButton.propTypes = {
  text: string.isRequired,
  IconComponent: string,
};

DropdownMenuButton.defaultProps = {
  IconComponent: '',
};
