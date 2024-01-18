import { useState } from 'react';
import { string, bool, node } from 'prop-types';
import DropdownMenuStyles from './DropdownMenu.module.scss';
import { ReactComponent } from '../../../images/ui/Menu-Icon.svg';
import DropdownMenuButton from '../DropdownMenuButton/DropdownMenuButton';

export default function DropdownMenu({ className, isChild, children }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={DropdownMenuStyles.section}>
      <button
        className={className}
        type="button"
        onClick={() => setOpen(!isOpen)}
        aria-label="Развернуть"
      >
        <ReactComponent className={DropdownMenuStyles.icon} />
      </button>
      <nav
        className={isOpen ? DropdownMenuStyles.active : DropdownMenuStyles.menu}
      >
        <ul className={DropdownMenuStyles.list}>
            {children}
        </ul>
      </nav>
    </section>
  );
}

DropdownMenu.propTypes = {
  className: string,
  isChild: bool,
  children: node,
};

DropdownMenu.defaultProps = {
  className: '',
  isChild: true,
  children: node,
};
