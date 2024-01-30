/* eslint-disable react/prop-types */

import {useNavigate} from "react-router-dom";
import Popup from "../ui-kit/Popup/Popup";
import Button from "../ui-kit/Button/Button";
import styles from './ExitPopup.module.scss';

function ExitPopup({ isOpen, onClose }) {
   const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        onClose();
        navigate('/');
    }
    return (
        <Popup title='Выход из аккаунта'
               name='name'
               isOpen={isOpen}
               onClose={onClose}
               onSubmit={() => ''}
        >
            <div className={styles.container}>
                <h3 className={styles.subtitle}>Вы уверены что хотите выйти из аккаунта?</h3>
                <div className={styles.buttonContainer}>
                <Button buttonText='Отменить' type='emptyBorder' HTMLType='button' onClick={onClose} />
                <Button buttonText='Выход' type='primary' HTMLType='button' onClick={handleLogout} />
                </div>
            </div>
        </Popup>
    );
}
export default ExitPopup;
