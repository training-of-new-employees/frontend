import React from 'react';
import { node } from 'prop-types';


export const ToastsContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([])

  function createToast (message, destructionTime, handleCancel) {
    const newToasts = [...toasts, {
      id: crypto.randomUUID(),
      message,
      destructionTime,
      handleCancel,
    }]
    setToasts(newToasts)
  }

  function handleDismiss (id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ToastsContext.Provider value={{toasts, handleDismiss, createToast}}>
    {children}
  </ToastsContext.Provider>;
}

export default ToastProvider;

ToastProvider.propTypes = {
  children: node.isRequired
}