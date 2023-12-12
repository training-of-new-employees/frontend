import { string } from 'prop-types';
import DropdownMenuButtonStyles from './DropdownMenuButton.module.scss';
import { ReactComponent } from '../../../images/ui/Menu-Icon.svg';

export default function DropdownMenuButton({ text }) {
    return (
        <li>
            <button className={DropdownMenuButtonStyles.item} type='button'>
                <ReactComponent className={DropdownMenuButtonStyles.icon} />
                {text}
            </button>
        </li>
    );
}

DropdownMenuButton.propTypes = {
    text: string.isRequired
  };
