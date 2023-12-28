import React from 'react';
import { string, number, func } from 'prop-types';
import styles from './Toast.module.css';
import { ToastsContext } from "../ToastProvider/ToastProvider";

function Toast({id, children, destructionTime, handleCancel}) {
  const timeout = destructionTime ?? 8000
  const {handleDismiss} = React.useContext(ToastsContext)
  const timeoutId = React.useRef();
  const handleDismissRef = React.useRef(handleDismiss)
  handleDismissRef.current=handleDismiss
  function initiateToastSelfDestruct() {
    timeoutId.current = setTimeout(()=>{
      handleDismissRef.current(id)
    }, timeout)
  }
  function handleMouseEnteringToast() {
    clearTimeout(timeoutId.current)
  }
  function handleMouseLeavingToast() {
    initiateToastSelfDestruct()
  }
  React.useEffect(() => {
    initiateToastSelfDestruct()
    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [])

  return (
    <div
         onMouseEnter={handleMouseEnteringToast}
         onMouseLeave={handleMouseLeavingToast}
         className={styles.toast}>
      <p className={styles.content}>
        {children}
      </p>
      <button onClick={handleCancel} type='button' className={styles.cancelButton}>
        Отменить
      </button>
    </div>
  );
}

export default Toast;

Toast.propTypes = {
  id: string.isRequired,
  children: string.isRequired,
  destructionTime: number,
  handleCancel: func.isRequired,
}

Toast.defaultProps = {
  destructionTime: 4000,
}
