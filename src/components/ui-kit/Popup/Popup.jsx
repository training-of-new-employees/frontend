import { node, string, func } from "prop-types";
import popupStyle from './Popup.module.scss';

export default function Popup({ title, children, name }) {
  return (
    <div className={popupStyle.popupContainer}>
      <div className={popupStyle.popupContant}>
        <h2 className={popupStyle.popupTitle}>{title}</h2>
        <button type="button" className={popupStyle.popupClose} aria-label="Закрытие окна" />
        <form className={popupStyle.popupForm} name={name} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}

Popup.propTypes = {
  title: string.isRequired,
  children: node.isRequired,
  name: string.isRequired
  // onClose: func.isRequired,
  // onSubmit: func.isRequired,
};