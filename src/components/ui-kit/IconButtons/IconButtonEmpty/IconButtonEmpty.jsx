import IconButtonEmptyStyles from './IconButtonEmpty.module.scss';
import { ReactComponent } from '../../../../images/ui/Icon-green.svg';

export default function IconButtonEmpty() {
	return (
		<button className={IconButtonEmptyStyles.button} type="button">
			<ReactComponent className={IconButtonEmptyStyles.icon} />
						{/* eslint-disable-next-line */}
		</button>
	)
}

