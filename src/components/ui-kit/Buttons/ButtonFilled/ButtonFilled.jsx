import { string } from 'prop-types';
import buttonFilledStyles from './ButtonFilled.module.scss';

export default function ButtonFilled({ buttonText, icon }) {
	// return <button type="button">{buttonText}</button>;
	return (
		<button className={buttonFilledStyles.button} type="button">
			<img className={buttonFilledStyles.icon} src={icon} alt='icon'/>
		{buttonText}
		</button>
	)
}

ButtonFilled.propTypes = {
	buttonText: string.isRequired,
	icon: URL.isRequired,
};
