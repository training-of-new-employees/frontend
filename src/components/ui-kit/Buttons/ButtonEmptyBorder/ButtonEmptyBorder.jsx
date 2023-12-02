import { string } from 'prop-types';
import ButtonEmptyBorderStyles from './ButtonEmptyBorder.module.scss';

export default function ButtonEmptyBorder({ buttonText, icon }) {
	// return <button type="button">{buttonText}</button>;
	return (
		<button className={ButtonEmptyBorderStyles.button} type="button">
			<img className={ButtonEmptyBorderStyles.icon} src={icon} alt='icon'/>
		{buttonText}
		</button>
	)
}

ButtonEmptyBorder.propTypes = {
	buttonText: string.isRequired,
	icon: URL.isRequired
};
