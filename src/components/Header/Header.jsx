import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../image/Logo.svg';

import headerStyles from './Header.module.scss';

export default function Header() {
	// @TODO ко всем картинкам подключить общий стиль чтобы они были блочными

	return (
		<header className={headerStyles.header}>
			<Link to="/">
				<img className={headerStyles.headerImage} src={logo} alt="Логотип" />
			</Link>
			<div className={headerStyles.header__userContainer}>
				<img src="#" alt="фото профиля" />
				<button
					className={headerStyles.button}
					type="button"
					aria-label="выйти из профиля"
				/>
			</div>
		</header>
	);
}
