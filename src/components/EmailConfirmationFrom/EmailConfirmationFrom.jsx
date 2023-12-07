import Button from '../ui-kit/ButtonRegisterPage/ButtonRegisterPage';
import emailConfirmationFormStyles from './EmailConfirmationFrom.module.scss';
import backIcon from '../../images/ui/Back-Icon.svg';
import Input from '../ui-kit/ConfirmationInput/ConfirmationInput';

export default function Register() {
    return (
        <section className={emailConfirmationFormStyles.section}>
            <form className={emailConfirmationFormStyles.form}>
                <h1 className={emailConfirmationFormStyles.title}>Подверждение e-mail</h1>
                <p className={emailConfirmationFormStyles.text}>Мы отправили вам на e-mail 4х значный код</p>
                <p className={emailConfirmationFormStyles.text}>Введите код для подверждения e-mail</p>
                <section className={emailConfirmationFormStyles.inputSection}>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                </section>
                <Button
                    buttonText='Подтвердить'
                />
                <div className={emailConfirmationFormStyles.container}>
                    <button
                        type='button'
                        className={emailConfirmationFormStyles.buttonBack}
                    >
                        <img
                            src={backIcon}
                            alt='Назад'
                            className={emailConfirmationFormStyles.imageBack}
                        />
                        Назад
                    </button>
                    <button
                        type='button'
                        className={emailConfirmationFormStyles.buttonAgain}
                    >
                        Отправить код повторно
                    </button>
                </div>
            </form>
        </section>
    );
}
