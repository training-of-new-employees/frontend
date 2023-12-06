import { useState } from 'react';
import DropdownMenuStyles from './DropdownMenu.module.scss';
import { ReactComponent } from '../../../images/ui/Menu-Icon.svg';

export default function DropdownMenu() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <button 
        className={DropdownMenuStyles.button} 
        type="button"
        onClick={() => setOpen(!isOpen)}
      >
        <ReactComponent className={DropdownMenuStyles.icon} />
        button
      </button>
      <nav className={isOpen ? DropdownMenuStyles.active : DropdownMenuStyles.menu }>
        <ul className={DropdownMenuStyles.list}>
          <li>
            <button className={DropdownMenuStyles.item} type='button'>
              <ReactComponent className={DropdownMenuStyles.icon} />
              text
            </button>
          </li>
          <li>
            <button className={DropdownMenuStyles.item} type='button'>
              <ReactComponent className={DropdownMenuStyles.icon} />
              text
            </button>
          </li>
          <li>
            <button className={DropdownMenuStyles.item} type='button'>
              <ReactComponent className={DropdownMenuStyles.icon} />
              text
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
