import { useState } from 'react';
import DropdownMenuStyles from './DropdownMenu.module.scss';
import { ReactComponent } from '../../../images/ui/Menu-Icon.svg';
import DropdownMenuButton from '../DropdownMenuButton/DropdownMenuButton';

export default function DropdownMenu({className}) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section>
      <button
        className={className}
        type="button"
        onClick={() => setOpen(!isOpen)}
      >
        <ReactComponent className={DropdownMenuStyles.icon} />
      </button>
      <nav
        className={isOpen ? DropdownMenuStyles.active : DropdownMenuStyles.menu}
      >
        <ul className={DropdownMenuStyles.list}>
          <DropdownMenuButton text="text" />
          <DropdownMenuButton text="text" />
          <DropdownMenuButton text="text" />
        </ul>
      </nav>
    </section>
  );
}
