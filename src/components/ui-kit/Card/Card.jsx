import { bool, string } from 'prop-types';
import { useLocation } from 'react-router';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import RadioButton from '../RadioButton/RadioButton';
import cardStyle from './Card.module.scss'



export default function Card({ text, isArchived, isEmployee, isAdmin }) {
    const pathname = useLocation().pathname

    return (
        <div className={`${cardStyle.cardContainer} ${isArchived ? cardStyle.archived : ''} `}>
            <h2 className={cardStyle.title}>{text}</h2>
            <div className={cardStyle.cardBox}>
                <p className={cardStyle.subtitle}>0 курсов</p>
                {isAdmin ?<p className={cardStyle.subtitle}>0 сотрудников</p> : ''}
            </div>
            {isEmployee ? (<div className={cardStyle.progressBar}>
                <p className={cardStyle.progressBarTitle}>Не начат</p>
                <div className={cardStyle.progressBarImage} />
            </div>) : '' }
                {pathname === '/position' ? (<DropdownMenu className={cardStyle.cardDropDownMenu} />) :
                    (<RadioButton
                        type='checkbox'
                        name='checkbox'
                        className={cardStyle.cardCheckbox}
                    />)}
            {isArchived ? (
                <button type='button' className={cardStyle.buttonArchived}></button>
            ) : ''}
        </div>
    )
}

Card.propTypes = {
    text: string.isRequired,
    isArchived: bool,
};

Card.defaultProps = {
    isArchived: false,
    isEmployee: false,
    isAdmin: false
};