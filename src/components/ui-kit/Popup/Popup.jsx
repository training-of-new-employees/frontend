import { node, string, func, bool } from 'prop-types';
import popupStyle from './Popup.module.scss';

export default function Popup({
  title,
  children,
  name,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`${popupStyle.popup} ${isOpen ? popupStyle.popupOpen : ''}`}
    >
      <div className={popupStyle.popupContant}>
        <h2 className={popupStyle.popupTitle}>{title}</h2>
        <button
          type="button"
          className={popupStyle.popupClose}
          aria-label="Закрытие окна"
          onClick={(event) => {
            event.stopPropagation();
            onClose();
          }}
        />
        <form
          className={popupStyle.popupForm}
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
        </form>
      </div>
    </div>
  );
}

Popup.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  name: string.isRequired,
  isOpen: bool.isRequired,
  onClose: func.isRequired,
  onSubmit: func.isRequired,
};
