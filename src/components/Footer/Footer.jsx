import React from 'react';
import { Link } from 'react-router-dom';

import footerStyles from './Footer.module.scss';

// @Todo узнать куда ссылки ведут
// @Todo узнать везде будет футер или только на авторизации

export default function Footer() {
	return (
		<footer className={footerStyles.footer}>
			<nav>
				<ul className={footerStyles.list}>
					<li className={footerStyles.list__item}>
						<Link to="/">Контакты</Link>
					</li>
					<li className={footerStyles.list__item}>
						<Link to="/">Условия и ограничения</Link>
					</li>
				</ul>
			</nav>
			<p className={footerStyles.copypast}>© 2023 QuickOn team</p>
		</footer>
	);
}
