import { string } from 'prop-types';
import ButtonEmptyStyles from './ButtonEmpty.module.scss';

export default function ButtonEmpty({ buttonText, icon }) {
	// return <button type="button">{buttonText}</button>;
	return (
		<button className={ButtonEmptyStyles.button} type="button">
			<img className={ButtonEmptyStyles.icon} src={icon} alt='icon'/>
		{buttonText}
		</button>
	)
}

ButtonEmpty.propTypes = {
	buttonText: string.isRequired,
	icon: URL.isRequired,
};
