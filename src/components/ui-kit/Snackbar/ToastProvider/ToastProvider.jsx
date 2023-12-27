import React from 'react';
import { node } from 'prop-types';

// Как использовать тостовые уведомления:
// 1. Обернуть приложение компонентом ToastProvider
// 2. Расположить компонент ToastShelf на тех страницах, где мы хотим показывать уведомления.
//    В принципе, возможно разместить его в самой App, тогда мы сразу покроем всё приложение.
// 3. На тех страницах, откуда нужно инициировать уведомление, определить функцию создания тоста:
//    const {createToast} = React.useContext(ToastsContext);
//    После чего в нужный момент вызвать эту функцию со следующими аргументами:
//    (message, destructionTime, handleCancel)
//    message = Сообщение тоста
//    destructionTime = Время жизни тоста в мс (если не указать, дефолтится на 8000)
//    handleCancel = Функция,которая будет вызвана по нажатию кнопки "Отменить" в тосте
//
//    Тосты живут указанное время, потом самоудаляются. При наведении мыши на тост, таймер самоудаления удаляется.
//    После того, как курсор выходит за пределы тоста, таймер устанавливается заново.


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