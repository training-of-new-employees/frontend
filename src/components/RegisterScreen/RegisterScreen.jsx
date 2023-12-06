import registerScreenStyles from './RegisterScreen.module.scss';
import rocket from '../../images/ui/rocket.svg';

export default function RegisterScreen() {
    return (
        <section className={registerScreenStyles.container}>
            <div className={registerScreenStyles.containerText}>
                <h2 className={registerScreenStyles.title}>QuickOn</h2>
                <p className={registerScreenStyles.text}>Платформа для обучения новых сотрудников</p>
                <p className={registerScreenStyles.text}>Создавайте индивидуальные курсы и должности для своей компании, комбинируйте их так, как нужно именно вам</p>
            </div>
            <img className={registerScreenStyles.image} src={rocket} alt='ракета' />
        </section>
    );
}
