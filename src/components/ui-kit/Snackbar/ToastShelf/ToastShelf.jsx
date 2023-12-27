import React from 'react';

import Toast from "../Toast/Toast";
import styles from './ToastShelf.module.css';
import {ToastsContext} from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const {toasts} = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((each) => (
        <li key={each.id} className={styles.toastWrapper}>
          <Toast id={each.id} handleCancel={each.handleCancel} destructionTime={each.destructionTime}>{each.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
