import React from 'react';
import ToastShelf from "../ToastShelf/ToastShelf";
import styles from './Previewer.module.css';
import {ToastsContext} from "../ToastProvider/ToastProvider";

function Previewer() {
  const {createToast} = React.useContext(ToastsContext);
  const [message, setMessage] = React.useState('Тестовый тост');
  const [cancelMessage, setCancelMessage] = React.useState(`То, что вы напишете здесь, будет выведено алертом при нажатии на кнопку "Отменить"`);
  const [destructionTime, setDestructionTime] = React.useState(4000)

  return (
    <div className={styles.wrapper}>
      <ToastShelf/>

      <form className={styles.controlsWrapper} onSubmit={(e) => {
        e.preventDefault();
        const handleCancel = () => {
          window.alert(cancelMessage)
        }
        createToast(message, +destructionTime, handleCancel)
        setMessage('');
        setCancelMessage('');
        setDestructionTime(4000)
      }}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} value={message} onChange={(event)=> {
              setMessage(event.target.value)
            }} />
          </div>
        </div>
        <div className={styles.row}>
          <label
            htmlFor="cancelMessage"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Cancel Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="cancelMessage" className={styles.messageInput} value={cancelMessage} onChange={(event)=> {
              setCancelMessage(event.target.value)
            }} />
          </div>
        </div>
        <div className={styles.row}>
          <label
            htmlFor="time"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Destruction Time
          </label>
          <div className={styles.inputWrapper}>
            <input type='number' id="time" className={styles.messageInput} value={destructionTime} onChange={(event)=> {
              setDestructionTime(event.target.value)
            }} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={styles.inputWrapper}
          >
            <button type="submit">Создать тост</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Previewer;
