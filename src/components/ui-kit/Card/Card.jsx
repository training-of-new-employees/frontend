import { bool, string } from 'prop-types';
import { useLocation } from 'react-router';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import RadioButton from '../RadioButton/RadioButton';
import cardStyle from './Card.module.scss'



export default function Card({ text }) {
    const pathname = useLocation().pathname

    return (
        <div className={cardStyle.cardContainer}>
            <h2 className={cardStyle.title}>{text}</h2>
            <div className={cardStyle.cardBox}>
                <p className={cardStyle.subtitle}>0 курсов</p>
                <p className={cardStyle.subtitle}>0 сотрудников</p>
            </div>
            {pathname === '/employee' ? (<div className={cardStyle.progressBar}>
                <p className={cardStyle.progressBarTitle}>Не начат</p>
                <div className={cardStyle.progressBarImage} />
            </div>) : 
             pathname === '/position' ? (<DropdownMenu />) :
            (<RadioButton
                type="checkbox"
                name="checkbox"
                className={cardStyle.cardCheckbox}
            />)} 
        </div>
    )
}

Card.propTypes = {
    text: string.isRequired
};
