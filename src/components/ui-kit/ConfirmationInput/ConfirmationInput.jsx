import ConfirmationInputStyles from './ConfirmationInput.module.scss';

export default function Register() {
    return (
        <div className={ConfirmationInputStyles.inputContainer}>
            <input className={ConfirmationInputStyles.input} />
        </div>
    );
}
